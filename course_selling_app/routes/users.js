const { Router } = require("express");

// const express = require("express");
// const Router = express.Router;

const userRouter = Router();

const {userModel} = require("../db");
const jwt = require("jsonwebtoken");

const {JWT_USER_PASSWORD} = require("../configue");


userRouter.post("/signup", async function(req,res){
   const {email,password,firstName,lastName} = req.body;

  await userModel.create({
    email,         //if key and value is same we can write like this also it is same as email: email
    password,
    firstName,
    lastName
   });

   res.json({
    massage:"Signup succesfull"
   })

});

userRouter.post("/signin", async function(req,res){
    const { email, password } = req.body;
   
    const user = await userModel.findOne({  // find function returns you lenght of matching data which could be empty[] array
        email: email,
        password: password
    })

    if(user){
       const token = jwt.sign({
        id:user._id
       },JWT_USER_PASSWORD);

       res.json({
        token: token
       })
    }
    else{
        res.status(403).json({
            massage: " you are not singin yet"
        })
    }
})