const input = require("readline-sync");
//taking the name and number from user
let name1=input.question("enter your name:");
let num1 =input.question("enter your number range from (1-100):");
let name2=input.question("enter your alias cause your playing alone and dont have friends:");
let num2=input.question("enter your number range from (1-100):");

//loop until winner is determined
while(true){
    //let player 1 guess
let name1=input.question("guess opponents number:");
if(name1==num2){
    console.log("congratulations  you guessed the number  correctly");
    break;
}
else if(name1<num2){
    console.log("your guess is too low");
}
else{
    console.log("your guess is too high");
}

//let player 2 guess
let name2=input.question ("guess opponent number:", name1);
if(name2==num1){
    console.log("congratulations you guessed the number %s correctly");
    break;
}
else if(name2<num1){
    console.log("your guess is too low");
}
else{
    console.log("your guess is too high");
}
//end of loop
}

