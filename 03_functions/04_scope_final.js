function one (){
    const username = "Bikash"

    function two(){
        const website = "youtube"
        console.log(username , "\n");
        
    }
    two()
    // console.log(website);    Throws error
    
}
one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(webite);
    
}
// console.log(username);


//++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1

}



// console.log(addTwo(5))    Throws error
const addTwo = function(num){
    return num+2
}