// it makes all of properties of a type optional , creating a type with the same properties , but each marked as optional

interface User8 {
    id:string,
    name:string,
    age:number,
    email: string,
    password: string
}

type updateProps = Pick<User8, 'name' | 'age' | 'email'>

type Updatedpropspartial = Partial<updateProps>

//it does't complain if we not pass all or any of props in argument