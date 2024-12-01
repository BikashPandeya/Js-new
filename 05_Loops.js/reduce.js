const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc , currentvalue) => {
    console.log(`Accumulator : ${acc} and current value : ${currentvalue}`);
    
    return acc + currentvalue
} , 0) //after comma is the initial value of accumulator

console.log(myTotal);




const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
