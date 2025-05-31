import { UUID } from "crypto"

interface User7 {
    id:string,
    name:string,
    age:number,
    email: string,
    password: string
}

type updateProp = Pick<User7, 'name' | 'age' | 'email'>

function UpdateUser(Updatedprops : updateProp){
    // updateProps access here
    console.log(`name: ${Updatedprops.name}`);
    
}