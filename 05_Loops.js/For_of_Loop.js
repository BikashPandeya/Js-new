// // FOr of looop


// const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }


// const greetings = "Hello WOrld"
// for (const greet of greetings) {
//     console.log(`EAch char is ${greet}`);
    
// }


// ******************Maps*****************************************

const map = new Map()
map.set("In" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("In" , "India")

console.log(map);


for (const key of map) {
    console.log(key );
}
for (const [key,value] of map) {
    console.log(key , ":-" , value);
}


// const myobj = {    OBJECTS ARE NOT ITERATABLE IN "FOR OF LOOP"
//     "game1" : "Cricket",
//     "game2" : "FOotball" ,
//     "game3" : "PUBg"
// }
// for (const [key , value] of myobj) {
//     console.log(key , ":" , value);    
// }