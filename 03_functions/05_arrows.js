const user = {
    username : "Hitesh" ,
    price : 999 , 
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);

function bikash() {
    let username = "hitesh"
    console.log(this.username)
}
bikash()


const chai  = () => {        //arrow function
    let username = "hitesh"
    console.log(this , "\n\n")

}
chai()

// const add = (num1 , num2) => {  //basic arrow function
//     return num1 + num2
// }



const add = (num1 , num2) =>   (num1 + num2)  //Implicit arrow function  and dont write return if not {}

console.log(add(2,4) , "\n");

const objectIN_arrow = (num1 , num2) =>   ({username : "Himal"})
console.log(objectIN_arrow())



// const myArray = [2,3,4,5,6]
// myArray.forEach(() => {})