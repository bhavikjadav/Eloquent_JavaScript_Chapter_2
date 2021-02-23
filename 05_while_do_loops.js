// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

// while loop
let number = 0;
while(number <= 12) {
    console.log(number);
    number = number + 2;
}

// Do while loop
// let yourName;
// do{
//     yourName = prompt("Who are you ?");
// } while(!yourName);
// console.log(yourName);

// For Loop
for(let num1 = 0; num1 <= 12; num1 = num1 + 2) {
    console.log(num1);
}

switch(prompt("What is the weather like ?")){
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;

    case "sunny":
        console.log("Dress lightly.");
        break;
    
    case "cloudy":
        console.log("Go Outside.");
        break;
    
    default:
        console.log("Unknown Weather type.");
        break;
}