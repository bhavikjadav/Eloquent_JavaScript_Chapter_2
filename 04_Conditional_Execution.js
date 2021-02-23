
/* Line number 3 to 6 will run only in the html */
// let theNumber = Number(prompt("Enter a number"));
// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// }

if (1 + 1 == 2)  console.log("It's true.");

/* Line number 11 to 16 will run only in the html */
// let theNumber = Number(prompt("Enter a number"));
// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("Hey, Why you didn't give me a number ?");
// }

let num = Number(prompt("Enter a number"));
if(num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}