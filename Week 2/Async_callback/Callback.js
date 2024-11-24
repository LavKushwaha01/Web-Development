

const fs = require("fs");

function print(err,data){
    console.log("error is")
    console.log(err)         // if no such directory is there it will print as error
    console.log("data is")
    console.log(data)
}

fs.readFile("a.txt", "utf-8" ,print);

fs.readFile("b.txt","utf-8",print);

console.log("Done!!")

 fs.readFile("a.txt", "utf-8", function (err, contents) {
 console.log(contents);
 });