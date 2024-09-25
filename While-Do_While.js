//*******************************************************While loops *****************
let index = 0;

while (index<=10) {
    console.log(`values of index ${index}`);
    index = index + 1.5;
    
}



// Another Example 

let MyArray = ["Himasnshu", "GOlu Sharma", "Ashotosh", "Appu "]
let arr = 0;
while (arr < MyArray.length) {
    console.log(`My Teammate name ${MyArray[arr]}`);
    arr++
    
}

// discuss about Do-while loops
let score = 0;

do {
    console.log(`Score is ${score}`)
    score = score + 1;
} while (score<=20);
// one specific feature in do-while loops if you execute some bigger than score value 
// like your score value is 21 and you check the condition only <= 20 then print the value 21 not given any errors 
// because do-while loops first execute the code inside the loop and then check the condition
