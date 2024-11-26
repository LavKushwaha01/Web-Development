/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. Promises are used to handle asynchronous 
operations more effectively than traditional callback functions, providing a cleaner and more 
manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or 
timers.
*/

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
/* Explanation of this line--: 
  *****  here Promise is a class and we create a new instance(object) *****
  
of Promise and give it a function(resolve) as argument now in,
arrow function resolve we give a function setTimeout function and time is same as we call the promisified function when time is 
passed setTimeout function is execute so now .then() function is executed ( by observation we can assume resolve funtion is replaced 
by .then function as resolve execute .then() is exexuted )

*/
    function callback() {
    console.log("3 seconds have passed");
    }

    //calling setTimeoutPromisified with 3000 ms as an argument but inside this we see a promise so when promise is evaluate then .then()
    // function is evaluate
    setTimeoutPromisified(3000).then(callback)





    //-------------------------------------------------------------

    const fs = require("fs")

  /*  ReadTheFile takes the function sendTheFinalValue as an argument 
     and promises says if the functions of callback(here- sendTheFinalValue ) is executed
     then p.then is executed so somehow call function is replace the fuction (here we can assume sendTheFinalValue function is replaced by
     callback of p.then and now when this is executed data of a.txt is store in contens of callback and finaly console.log(contens) prints the
     data of a.txt )
*/
    function ReadTheFile(sendTheFinalValue){   
                                         
       fs.readFile("a.txt", "utf-8", function (err,data){
        sendTheFinalValue(data);
       })
    }

    function readFile(fileName){
       // read the file and returns it's value
        return new Promise(ReadTheFile)          // promise takes the fuction ReadTheFile as an argument 
    }

    const p=readFile;

    function callback(contents){
      console.log(contents);
    }

    p.then(callback);