import { log } from "console";

interface User6 {
    name: string,
    age: number
}

function sumOfage (user1: User6 , User2 : User6){
    return user1.age + User2.age;
}

const age = sumOfage({name:"lav" , age:10 }, {name: "kush" , age: 39} )
console.log(age);
