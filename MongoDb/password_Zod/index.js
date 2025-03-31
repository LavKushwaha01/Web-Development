const express = require("express");
const mongoose = require("mongoose");

const {Usermodel,Todomodel} = require("./db")

mongoose.connect("mongodb+srv://lavkumar062:SxvMKIyMlAA5EyyU@cluster0.v4ibkbc.mongodb.net/Todo-App")

const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";
const { z } = require("zod");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());



app.post("/singup", async function(req,res){

    const reqBody = z.object({
        email: z.string().min(3).max(50).email(),
        password: z
          .string()
          .min(6)
          .refine((password) => /[A-Z]/.test(password), {
            message: "Required atleast one uppercase character",
          })
          .refine((password) => /[a-z]/.test(password), {
            message: "Required atleast one lowercase character",
          })
          .refine((password) => /[0-9]/.test(password), {
            message: "Required atleast one number",
          })
          .refine((password) => /[!@#$%^&*]/.test(password), {
            message: "Required atleast one special character",
          }),
        name: z.string().min(3).max(30),
      });

      const parsedData = reqBody.safeParse(req.body);
      if (!parsedData.success) {
        res.json({
          message: "Incorrect format",
          error: parsedData.error.issues[0].message,
        });
        return;
      }

      try{
     const email = req.body.email;
     const password = req.body.password;
     const name = req.body.name;

     const hashedpassword = await bcrypt.hash(password,10);

    await Usermodel.create({
          email: email,
          password: password,
          name: name    
     });
      
           res.json({
          massage: " you are logged in"
          })
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                error: "error signing up user"
            })
        }
});

app.post("/singin", async function(req,res){
    try{
    const email= req.body.email
   const  password= req.body.password
   

   const user = await Usermodel.findOne({        
    email: email,
   
});
if(!user){
    return res.status(403).json({ message: "Invalid credentials" });
}

const isPasswordValid = await bcrypt.compare(password, user.password);

if(isPasswordValid){
    const token = jwt.sign({
        id: user._id.toString()
    },JWT_SECRET);

    res.json({
        token
    });
}
else{
    res.status(403).json({
        message: "Incorrect Credentials"
    });
}
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:"Error signing in user"
        });
    }
});

function auth(req, res, next){
    const token = req.headers.token;
   const decoded = jwt.verify(token , JWT_SECRET);

   if(decoded){
    req.userId = decoded.id;                        
    next();
   }

   else{
    res.status(403).json({
        massage: "invalid credicals"
    })
   }
}

app.post("/todo",auth , async function(req , res){
    try{
          const userId = req.userId
          const title = req.body.title
          const done = req.body.done;

          const todo = Todomodel.create({
            title,
            userId,
            done
          })

         await todo.save();

          res.status(200).json({
            message: "Todo created..."
        })
    }
    catch(error){
        res.status(500).json({
            error:"could't create todo"
        })
    }

})


app.get("/todos", auth, async function(req ,res){

    try{
    const userId = req.userId;

    const todos = await Todomodel.find({
        userId
    });

    if(todos.length===0){
        res.status(404).json({ message: "No todos found for this user" });
    } 
    else {
      res.json({ todos });
    }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
          error: "could't get todos...."
        })
    }
});

app.listen(3000);

