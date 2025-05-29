type UserType = {
    Firstname:  string,
    lastname: string, 
    age: number

}

interface Userinterface {
    Firstname:  string,
    lastname: string, 
    age: number

}

function hii(User: Userinterface ){
 console.log(User.age);
}

let User: UserType = {
    Firstname: "lavk",

    age: 20,
    lastname: "kuamr"
}

hii(User);


interface manager {
    name: string,
    age: number
}
interface employee{
    name: string,
    department: string
}

type teamlead = manager & employee

let t : teamlead = {
    name : "lav",
    age:10,
    department: "cs"
}