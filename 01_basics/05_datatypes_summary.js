//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

let obj1 = { name: "Alice" };
let obj2 = obj1; // Reference is copied
obj2.name = "Bob";
console.log(obj1.name); // Output: Bob (affected by the change)

let x = 10;
let y = x; // Copy of the value
y = 20;
console.log(x , "\n\n"); // Output: 10 (unchanged)


// https://262.ecma-international.org/5.1/#sec-11.4.3

// stack memory = (primitave datatype)    and   heap memory = (non-primative datatype)


let objone = { name: "Alice" };
let objtwo = objone; // Reference is copied
objtwo.name = "Bob";
console.log(objone.name); // Output: Bob (affected by the change)
console.log(objtwo.name , "\n");


let a = 10;
let b = x; // Copy of the value
b = 20;
console.log(a);// Output: 10 (unchanged)
console.log(b);