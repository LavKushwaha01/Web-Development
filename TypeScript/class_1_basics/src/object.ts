function hello(user: {
    name: String,
    age: number
}){
    console.log(`hello ${user.name}`)
}

// greet({
//   name: "lav",
//   age: 10  
// })

let user = {
    name: "lavk",
    age: 23
}

hello(user)