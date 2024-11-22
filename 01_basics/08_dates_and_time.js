//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

console.log(typeof myDate, "\n\n");


let myCreatedDate = new Date(2022 , 0 , 20, 5 , 3)
console.log(myCreatedDate.toLocaleString());

let mynewDate = new Date("01-13-2024")
console.log(mynewDate.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);  //returns the current timestamp in milliseconds since January 1, 1970 
console.log(mynewDate.getTime())//returns the current timestamp in milliseconds since January 1, 1970 to mynewDAte

console.log(Math.floor(Date.now() / 1000) , "Time in minutes\n\n");



let newDate = new Date()
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);//cuz it starts from 0
console.log(newDate.getDay());



