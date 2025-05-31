//Interface have another special property. you can implement interfaces as a class

import { log } from "console";

interface people {
    name: string,
    age: number,
   greet(): string
}



// Object or variable 
let person : people ={
    name: "lav kumar",
    age: 21,
    greet(){
        return "hii"
    }
}

let greeting = person.greet();
console.log(greeting);




 interface Userr {
    name: string,
    age: number,
   islegal(): boolean;
}


// class
class Manager implements Userr{
    name: string;
    age: number;
    number: string;

    constructor(name: string , age: number){
        this.name = name;
        this.age = age;
        this.number = "234" //extra attribute can come but atleast all variable has to be come which we implement
    }
    islegal(){     //  no need to write function keyword when it defining in a class
        return this.age>18;
    }

}

 class God extends Manager {
    constructor(name:string , age: number){
        super(name,age)
    }
 }


 abstract class User{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    abstract greet(): string;

    hello(){   // default implementation and that is the the differance b/w abstract and interface
    console.log("hii there");
    
    }

 }

 class emplyee extends User{
    name:string;
    constructor(name:string){
        super(name)
        this.name= name;
    }
    greet(){
        return "hii " + this.name
    }
 }


const a = new Manager('lav' , 20);
console.log(a.name);  // lav
console.log(a.age);   // 20



