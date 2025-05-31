// readOnly is a utility type that makes all properties of an object type read-only.
// It creates a type with the same properties, but each marked as read-only, meaning they cannot be modified after creation.

type User = {
    readonly name: string;
    readonly age: number;
}

const User: User = {
    name: "John",
    age: 30
}
// User.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

const User2: Readonly<User> = {
    name: "Jane",
    age: 25
}

// User2.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
function printUser(user: Readonly<User>) {

    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
printUser(User);
printUser(User2);   
// The Readonly utility type is useful when you want to ensure that an object cannot be modified after it has been created, providing immutability and safety in your code.
// It is particularly useful in scenarios where you want to pass objects around without allowing modifications, such as in function parameters or when defining constants.  
// By using Readonly, you can prevent accidental changes to the properties of an object, making your code more robust and easier to maintain.
// In this example, we define a User type with read-only properties name and age.   
