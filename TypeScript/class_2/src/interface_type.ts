const { strict } = require("assert");
const { Interface } = require("readline");

interface Admin {
    name: String,
    permission : string
}

interface User3 {
    name: string,
    age: number
}

type UserorAdmin = User | Admin;
function greet(user : UserorAdmin){
    console.log(user.name);
    
}

interface User4 {
    age: number | string // inside union and intersection can allow but not with interfaces
}
