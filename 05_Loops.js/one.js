
// for (let index = 0;index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number");
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`The table of ${i} is`);
//     for (let j = 0; j <= 10; j++) {
//        // console.log(`Inner loop value if: ${j} and Inner loop time : ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`)
        
        
//     }
    
// }



let myArr = [ "flash" , "batman" , "superman"]
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}


// break and continue

// for (let index = 0; index  <=20; index++) {
//     if(index == 5){
//         console.log("Number 5 is detected");
//         break
//     }
//     console.log(`Value of index is ${index}`);
//     ;
    
// }


for (let index = 0; index  <=20; index++) {
    if(index == 5){
        console.log("**********Number 5 is detected***********");
        continue
    }
    console.log(`Value of index is ${index}`);
    ;
    
}
