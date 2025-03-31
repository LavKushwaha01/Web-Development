const express = require("express");
const mongoose = require("mongoose");

const {Usermodel,Todomodel} = require("./db")

mongoose.connect("mongodb+srv://lavkumar062:SxvMKIyMlAA5EyyU@cluster0.v4ibkbc.mongodb.net/Todo-App")

const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";



const app = express();

app.use(express.json());



app.post("/singup", async function(req,res){
     const email = req.body.email;
     const password = req.body.password;
     const name = req.body.name;

    await Usermodel.create({
          email: email,
          password: password,
          name: name    
     });
           res.json({
          massage: " you are logged in"
          })
});

app.post("/singin", async function(req,res){
    const email= req.body.email
   const  password= req.body.password
   

   const user = await Usermodel.findOne({        
    email: email,
    password: password,
})
if(user){
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
    })
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
          const userId = req.userId
          const title = req.body.title
          const done = req.body.done;
          await Todomodel.create({
            title,
            userId,
            done
          })

          res.json({
            message: "Todo created"
        })
     

})


app.get("/todos", auth, async function(req ,res){
    const userId = req.userId;

    const todos = await Todomodel.find({
        userId
    });

    res.json({
        todos
    })

    
})

app.listen(3000);

