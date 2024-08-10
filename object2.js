// use constroctor method to create
// object of class
const facebookUser = new Object();
facebookUser.name = "Golu Sharma ";
facebookUser.email2 = "golu@facebook.com";
facebookUser.isLoggedIN = false;
console.log(facebookUser);

const googleUser = {
    email: "golu@goole.com",
    userId: "90wejdj"

}
const InstagramUser = {
    Follwer : false,
    like : 7800,
    totalPost : 110
}

//Marge the both objects

const mainUser = Object.assign({} , facebookUser, googleUser);
console.log(mainUser);

// another method to marge tow object
const mainOneUser = {...facebookUser, ...InstagramUser}
console.log(mainOneUser);


// ****************************************************************

//Destructure in object

const amity = {
    name: "Himanshu Sharma",
    Enrollment_NO : "A78349274",
    section : "A",
    LT : 409

}
console.log(amity);
//Destructure the object 
const {Enrollment_NO : RollNO} = amity;
// in this code destructure the Enrollment_NO to RollNO;

console.log(`Change to my Enrollment_No to ROllNO ${RollNO}`);
// ****************************************************************



