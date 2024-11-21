const name = "Bikash"
const repocount = 50

console.log(`My name is ${name} and my repo count is ${repocount}`)

const gameName = new String("Biikash")

console.log(gameName[0]);
console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(4))

console.log(gameName.indexOf('i'))

const newstring = gameName.substring(0,4)
console.log(newstring)

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringone = "     hitesh     "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://bikash.com/bikash%20pandeya"
console.log(url.replace("%20" , "-"));
console.log(url.includes("bikash"));

const stringexample= "Bikash-Pandeya-bhatta"
console.log(stringexample.split("-"));

