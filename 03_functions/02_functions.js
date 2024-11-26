function calculateCartPrice(val1  ,val2 , ...num1){//rest operator ...  But in  case of adding arrays or object its spread operator 
    return num1
}

console.log(calculateCartPrice(200,400,500 , 600 ,700));

const user = {
    username :"Bikash" ,
    price : 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)

const myNewArray = [200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
returnSecondValue([700,800,900])



const arrFunc = function(...arr) {
    console.log(arr)
}
arrFunc(100 , 200 , 300 , 400)