const isUserLoogedIn = true

if (2 !== "2"){
    console.log("executed")
}


const temperature = 45
if (temperature === 46){
    console.log("Temperature is 46");
    
}else{
    console.log("Temperature is not 46");
    
}


const balance = 1000
if(balance > 500) console.log("test");

if(balance < 500){
    console.log("less than");
    
}else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 1200){
    console.log("Less than 1200");
    
}



const userLoogedIn = true
const debitcard = true
const loogedInFromGoogle = false
const LoogedInFromEmail = true

if(userLoogedIn && debitcard){
    console.log("Allow to buy course");
    
}

if(LoogedInFromEmail || loogedInFromGoogle){
    console.log("User Logged in");
    
}