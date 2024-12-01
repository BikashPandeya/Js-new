const myObject = {
    js : "JAvascript",
    cpp :"C++",
    rb : "ruby",
    py : "python"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}


const lang = ["JS" , "RUby" , "Python" , "JAva"]
for (const key in lang) {
    //console.log(key);  //ONLY GIVES 0 1 2 3 as they are keys of arrays
    
   console.log(lang[key]);
   
}



const map = new Map()
map.set("In" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("In" , "India")



for (const key in map) {  // Mps are not iteratable by "FOR IN LOOP"
    console.log(key);
}