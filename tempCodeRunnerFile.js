// here we are using the variable decliers to store the string and number values
console.log(Name + RepoCount); // it's a old method 
// here we are using the "+" operator to concatenate the string and number together
// but the result will be a string, not a number
// output is HImanshu 70


// new method use "``"
console.log(`My Name is ${Name} Total Repocont is ${RepoCount}`);

// How to declare a Sring in Another Method 
const FullName = new String("HImanshu Kumar Sharma")
console.log(FullName);
console.log(FullName.length);
console.log(FullName.toUpperCase);
console.log(FullName.indexOf('h'));
// here we are using the new keyword to declare a string object
// the string located value in memoery stack location// means copy the volues don't change the main value
// we can use the string object methods like length, toUpperCase, indexOf etc.



//**************************************************** */
// IN this time discuss print means you want to print only  firtt 4 letter or last 3 letter


let UserID = "7030himanshuSharma"
// let's you want to print the vlaue for first 4 letter 
console.log(UserID.substring(0,5));
// here we are using the substring method to get the first 4 letter of the string
//5 is not included only 0-4 
