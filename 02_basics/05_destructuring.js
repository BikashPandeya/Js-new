const course = {
    coursename : "js inhindi" ,
    price : "999"
    , courseInstructor :"Bikash"
}

// console.log(course["coursename"]);

const {courseInstructor : teacher} = course
console.log(teacher);

// {
//     "name": "Bikash" ,
//     "coursename" : "JS in hindi" , 
//     "price" : "free"
// }