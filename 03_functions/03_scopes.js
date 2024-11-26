var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 25
    console.log("INNER: ", a);
    
}



console.log(a);  // both let and const are only for local scope and do not have effect and cannot be accessed in global scope
// console.log(b); // both let and const are only for local scope and do not have effect in global scope
console.log(c);