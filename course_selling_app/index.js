
// require('dotenv').config()
// console.log(process.env.MONGO_URL)

const express = require("express");
const mongoose = require("mongoose");

const{userRouter} = require("./routes/users")

const {courseRouter} = require("./routes/courses");
const {adminRouter} = require("./routes/admin");


const app = express();
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


async function main(){
  await  mongoose.connect("mongodb+srv://lavkumar062:SxvMKIyMlAA5EyyU@cluster0.v4ibkbc.mongodb.net/couseera");
  console.log("your DataBase connected");
  app.listen(3000);
}

main();



// to avoid deadlock condition we use seperate configue...
