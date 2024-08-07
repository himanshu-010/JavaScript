// in this file discuss the heap or Stack
// Basically heap is in premitive datatypes values
// satck is use  for NonPrimitive datatype

// lets cheack 

let YourName = "Himashu Kumar";
let ChildhoodName= YourName;
ChildhoodName = "Golu Sharma"
console.log(ChildhoodName); //Golu Sharma
console.log(YourName); //Himashu Kumar


// in this code basically stack memeory location and stack memory location does not change your own values it's just gove you copy for those values
// so if you change the copy it will not change the original value.


//*****************Heap  */
// heap basically located the original values and use in Non-primitive values

let UserOne = {
    email : "himanshu@gmialcom" ,
    upi : "tdsj@jdo"
}

let UserTwo = UserOne;
UserTwo.email = "golu@gmail.com"
console.log(UserTwo.email); // golu@gmail.com
console.log(UserOne.email); // golu@gmail.com

// Both UserTwo and UserOne change the value and assign The value in UserTWo.






