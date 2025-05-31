interface User {
    name: string;
    age:number
    address: Address,
}

interface Address {
    city:string,
    country: string,
    pincode: number
}

interface office{
    adress: Address
}