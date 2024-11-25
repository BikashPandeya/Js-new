const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc = ["Superman" , "Batman" , "Flash"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1])




// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros , "\n")

// const all_new_heros = [...marvel_heros , ...dc]
// console.log(all_new_heros)



// const another_array = [1,2,3,[4,5,6] , 7 , [6,7,[4,5]]]
// const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);



//These are important*************************************************************



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) //interesting




let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));

const new_arr = [1,2,3,4,"ff" , false]
const next_arr = [4,5,6]
console.log(Array.isArray([]))
console.log(Array.from("Bikash"));
console.log([...new_arr , ...next_arr]);

