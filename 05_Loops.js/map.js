const mynumbers = [1,2,3,4,5,6,7,8,9,10]

const newNUms = mynumbers.map( (num) => {
    return num+10
} )


console.log(newNUms); //difference between map and filter
const newNUms2 = mynumbers.map( (num) => {
    return num>=10
} )
console.log(newNUms2);


const nextNums = mynumbers
                .map((num) => num*10)
                .map( (num) => num+1 )
                .filter((num) => (num>=40))
console.log(nextNums);

