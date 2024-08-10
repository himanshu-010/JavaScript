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


