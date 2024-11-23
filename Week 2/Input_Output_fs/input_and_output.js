/* 
I/O heavy operations ->

 I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of 
data transfer between the program and external systems or devices. These operations usually 
require waiting for data to be read from or written to sources like disks, networks, databases, or 
other external devices, which can be time-consuming compared to in-memory computations.

Examples of I/O Heavy Operations:
 1. Reading a file
 2. Starting a clock
 3. HTTP Requests   
  */

 // fs is For File System is a library of Node which use for computer files access

 const fs = require("fs");


 const contents = fs.readFile("a.txt", "utf-8");  // Asyncronous
 console.log(contents);
 

 const contents2 = fs.readFileSync("b.txt", "utf-8");  // syncronous
 console.log(contents2);