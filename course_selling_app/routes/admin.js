const { Router } = require("express");

// const express = require("express");
// const Router = express.Router;

const adminRouter = Router();

const {adminModel} = require("../db")
const jwt = require("jsonwebtoken");

const{JWT_ADMIN_PASSWORD} = require("../configue")



adminRouter.post("/signup", async function(req,res){
    const {email,password,firstName,lastName} = req.body;

    await adminModel.create({
      email,         //if key and value is same we can write like this also it is same as email: email
      password,
      firstName,
      lastName
     });
  
     res.json({
      massage:"Signup succesfull"
     })
  
});



adminRouter.post("/signin" , async function( req, res){
    const { email, password } = req.body;
   
    const admin = await adminModel.findOne({  // find function returns you lenght of matching data which could be empty[] array
        email: email,
        password: password
    })

    if(admin){
       const token = jwt.sign({
        id:user._id
       },JWT_ADMIN_PASSWORD);

       res.json({
        token: token
       })
    }
    else{
        res.status(403).json({
            massage: " you are not singin yet"
        })
    }
} )