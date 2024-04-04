// Primitive

// 7 types : String, Number, boolean, null (empty),
// undefined, symbol, BigInt

const score = 100
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber = 21211323434234n

// Reference (Non primitive)

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "komal",
    age: 22,
}

const myFunction = functio(){
    console.log("hello world");
}
 
console.log(typeof bigNumber);
