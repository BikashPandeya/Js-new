// singleton

// object literals

const mySymbol1 = Symbol("key1")
const mySymbol2 = Symbol("key2 ")


const Jsuser = {name : "Bikash" , "full name" : "Bikash Pandeya" 
    , [mySymbol1] :"mykey1" //here mysymbol1 is a symbol
    , age : 16  , location : "kathmandu"
    , email : "bikashpandeya@gmail.com"
    , isLOggedin : false , 
    lastLoginDate:["Sunday" , "Monday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(typeof Jsuser[mySymbol1] , "\n\n");


Jsuser.email = "chatgpt@gmail.com"
console.log(Jsuser["email"] , "\n\n");

// Object.freeze(Jsuser)
// Jsuser.email = "hello@gmail.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello Js user")
}
Jsuser.greeting2 = function(){
    console.log(`Hello again Js user , ${this.name}`)
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

