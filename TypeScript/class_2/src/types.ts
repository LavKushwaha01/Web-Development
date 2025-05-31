// the difference beetween types and interfaces
// 1. In types you can't implement in class
// 2. in interfaces you can't do union and intersection

type Employee  = {
  name: string;
  startDate: string;
}

type manager = {
  name: string;
  department : string;
}

// Intersection
type teamlead = Employee & manager;

let e: Employee = {
    name: "lav",
    startDate : "432"
}

let m : manager ={
    name: "kush",
    department: "cs"
}

let t : teamlead ={
name: "KK",
startDate : "534232",
department: "hgfejdkl"
}

//-------------------------------
 
type GoodUser ={
    name: string,
    gift : string
}

type BadUser = {
    name: string,
    ip: string
}

// Union
type Userr = GoodUser | BadUser;

const user = {
    
}