// in this learn about object js
// how to create object in js 
const newUser = {
    name: 'HImanshu',
    age: 20,
    email: "himm64648@gmail.com",
    location: "Patna"
}

console.table(newUser);
// output: { name: 'HImanshu', age: 20, email: "

// How to access the values in object
console.log(newUser.name);
// output: HImanshu
// Change the values in object
newUser.age = 67;
console.log(newUser.age);
// output: 67


// how to freeze the values means no change the values in object
// use freeze method ;

// Object.freeze(newUser);

// no changes in newuser object

//How to add function in object 
newUser.greeting = function(){
    console.log(`Welcome you ${this.name}`);
    
}
console.log(newUser.greeting());


