// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB connected`);
    
})(); // HERE ADD ; TO END THE IIFE . Without it  , it will throw error


( (name) => {
    // Unnamed IIFE
    console.log(`DB CONNECTED 2 ${name} `);
    
})("Hitesh")