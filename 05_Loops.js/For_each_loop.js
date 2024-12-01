const coding = ["JS" , "RUby" , "Java" , "Python"]

coding.forEach( function (item){
    console.log(item);
    
} )
console.log();




coding.forEach((item) => { // arrow function
    console.log(item);
    
})
console.log();




function printme(item){
    console.log(item);
    
}
coding.forEach(printme)
console.log();



coding.forEach((item , index , original_array) => {
    console.log(item , index , original_array);
    
})
console.log("\n\n\n");





const myCOding = [
    {
        languagename : "Javascript" ,
        languagefile : "js"
    } , 
    {
        languagename : "Java" ,
        languagefile : "java"
    } ,
    {
        languagename : "Python" ,
        languagefile : "py"
    }
]

myCOding.forEach( (item) => {
    console.log(`${item.languagefile} : ${item.languagename}`);
    
} )