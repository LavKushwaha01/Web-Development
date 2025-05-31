import { log } from "console";
import { boolean } from "zod";
 
// interfaces is nothing but assign types to objects which is not primitive

interface User {
    name: string;
    age:number
    address: {
     city:string,
        country: string,
        pincode:number
    }
}


interface User2 {
    name: string;
    age:number
    address ?:  { // ? indicate tha it is optiona;
     city:string,
        country: string,
        pincode:number
    }
}

let user2: User2 = {
    name:"lav k",
    age:20,  // herre address is optional but put all address or neither it is not acceptable just pincode...
}

let user: User = {
    name:"lav",
   age:19,
   address:{
    city: "sasaram",
    country:"india",
    pincode:821115
   }
}

function islegal(user: User): boolean{
    if(user.age>=10){
        return true;
    }
    else{
        return false;
    }
}
let ans = islegal(user);
console.log(ans);
