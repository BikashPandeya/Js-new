const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "Bikash"
tinderuser.isloggedin = false

console.log(tinderuser)

const regularuser = {
    email : "bikash@gmail.com" ,
    fullname : {
        userfullname:{
                firstname : "bikash" , 
                lastname : "Pandeya"
        }
    }
}
console.log(regularuser.fullname.userfullname.lastname);


const obj1 = {1:"a" , 2 : "b"}
const obj2 = { 2 : "c" , 4 : "d"}
const obj4 = { 4 : "e" , 5 : "f"}
const obj3  = Object.assign({} , obj1 , obj2 , obj4) //target is {} so all objectes i.e obj1,obj2,obj3 will be stpred in {}
console.log(obj3);
console.log(obj1 , "\n\n"); //if target i.e in first place will be obj1 so it will add obj2 and obj3 in obj1


console.log({...obj1 , ...obj2 , ...obj3} , "\n\n")

const users = [
    {
        id :1 ,
        email : "random@gamail.com"
    },
    {

    } ,
    {

    }
]

console.log(users[0].email , "\n")

console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));

console.log(Object.keys(tinderuser).length)
