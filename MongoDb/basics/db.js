const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
  });

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const Usermodel = mongoose.model("users",User);
const Todomodel = mongoose.model("todos", Todo);

module.exports={
    Usermodel: Usermodel,
    Todomodel: Todomodel
}