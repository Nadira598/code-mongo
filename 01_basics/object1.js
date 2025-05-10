const mySym = Symbol("myKey1");


const obj = {
    
    "name": 'John',
    [mySym]: "mykey1",
    age: 23,
    location: "udaipur",
    email: "nadira@gmail.com",
    lastLoginDays: ["monday","tuesday"]

};

obj.email = "nadi@gmail.com"
// Object.freeze(obj);
// console.log(obj.email);


obj.greeting = function(){
    // console.log("hello");
}

// console.log(obj.greeting());
// console.log(obj);


const tinderUser = {
    

}
tinderUser.id = 1
tinderUser.name = "nadira"


// console.log(tinderUser);

const regularUser = {
    email: "nadi@gmail.com",
    fullname: {
        username: "nadi",
        
    }
}

// console.log(regularUser.fullname?.username);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3:"a",
    4: "b"
}


// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

const course = {
    coursename: "javascript",
    price: 100,
    courseInstructor: "nadi"
}

console.log(course.coursename);