// scope means {INside some code ANd execute Inside or uotside some function }
// scope is a region of the code where a variable is defined
// There Are two types of Scope in js 1-> Local 2-> Global
// Local Scope is a region of the code where a variable is defined inside a function
// Global Scope is a region of the code where a variable is defined outside a function
//local Scoope example 
// if (true){
//     let name = "HImanshu";
//     let CollageNAme = "Amity University Patna"
//     let Enrollment_NO = `010`
//     console.table([name,CollageNAme, Enrollment_NO]);

// }

// nexted scope 
function Outer (){
    let Company = "Amazone";
    function Inner() {
        let RelatedCompany = "AWS - Amazone Web Service"
        console.log(Company);
    }

//console.log (RelatedCompany); // THis code occurs Error in Js because It's not work Outside the function it's a child class 
    Inner();

}


Outer ();


// **********************************  Some iNtersresting THings ****************


// lets suppose 
// Inthis side declere The AddOne function And its work

console.log(AddOne (7));
function AddOne (num) {
    return num + 1 ; 
}
//but But This Side does not declare Function in this side AddTwo
//console.log(AddTwo (7));
const AddTwo = function (num) {
    return num + 2 ;
}