#! /usr/bin/env node
import inquirer from "inquirer";

let balance=15000;
let currentPin=1122;

const userInput=await inquirer.prompt(
    {
    name:"userpin",
    type:"number",
    message:"Enter your pin"
})

if (userInput.userpin==currentPin){
    console.log("Login Successful");
    console.log("Your Balance is",balance);
    const userAction=await inquirer.prompt(
    {
    name:"userChoice",
    type:"list",
    message:"Select Your Action",
    choices:["Withdraw","Check Balance"]
}
);

if (userAction.userChoice=="Withdraw"){
    const drawAmount=await inquirer.prompt(
    {
    name:"withdrawAmount",
    type:"number",
    message:"Enter Amount"
}
);
    console.log("You Withdraw Rs.",drawAmount.withdrawAmount);
    console.log("Now Your Balance is", balance - drawAmount.withdrawAmount);
}
else if (userAction.userChoice=="Check Balance"){
    console.log("Your Balance is", balance);
}
}
else{
    console.log("You Entered incorrect PIN");
}

