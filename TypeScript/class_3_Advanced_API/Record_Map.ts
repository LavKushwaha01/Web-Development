type User11 = {
    name: string;   
    age: number;
}

// type Users = {  
//     [key: string]: User11; // Record<string, User11> is equivalent to this
// }

type Users = Record<string, User11>;

// The Record utility type is a built-in TypeScript type that allows you to create an object type with specific keys and values.
// It is a generic type that takes two type parameters: the first is the type of the keys, and the second is the type of the values.


const users : Users  = {
    "lav": {
        name: "lav",
        age: 10
    },
    "kush": {
        name: "kush",
        age: 39
    }

}

// Map is a built-in JavaScript object that allows you to store key-value pairs, where keys can be of any type and values can also be of any type.
const userMap = new Map();
userMap.set("lav", {
    name: "lav",
    age: 10
});
userMap.set("kush", {
    name: "kush",
    age: 39
});

// The Map object is useful when you need to maintain the order of elements, allow keys of any type, or require efficient lookups and insertions.
// It provides methods like set, get, has, and delete to manipulate the key-value pairs.

const user = userMap.get("lav");
userMap.delete("lav");