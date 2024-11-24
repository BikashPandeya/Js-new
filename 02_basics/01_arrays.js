const myArr = [ 1 , 2 , 3 , true , "bikash"]
console.log(myArr[0]);
console.log(myArr.length , "\n\n")


const myArr2 = new Array(2,3,4)
console.log(myArr2[0] , "\n\n");

//Array Methods

myArr.push("6th value")
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.unshift(9)
console.log(myArr , "\n\n" );

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
console.log(myArr.indexOf(100) , "\n\n")


const newArr = myArr.join(":")
console.log(typeof arr)
console.log(newArr)
console.log(typeof newArr , "\n\n\n")


//slica,splice

console.log(myArr , "\n");

const myn1 = myArr.slice(1,3) //here it removes elements from index 1 to index 2 excluding 3
console.log("Original array on using slice: " , myArr);
console.log(myn1 , "\n");

const myn2 = myArr.splice(1,3) //here it removes 3 element from element one and furthur and also changes the original array
console.log("Original array on using splice: " , myArr);
console.log(myn2);





