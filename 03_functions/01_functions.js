// console.log("B");
// console.log("I");
// console.log("K");
// console.log("A");
// console.log("s");
// console.log("h");


function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNUmbers(number1,number2){
//    console.log( number1+number2);
// }
   
function addTwoNUmbers(number1,number2){
   let add =  number1+number2
   return add
}
const result = addTwoNUmbers(3,5)   
console.log(result);

function LoginUserMessage(username){
    if (username === undefined){
        console.log("Please ENter a username .");
        return
    }
    return`${username} just looged in`
}

console.log(LoginUserMessage("Bikash"))
console.log(LoginUserMessage())