#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messeage: "Enter your first number", type: "number", name: "firstNumber" },
    { messeage: "Enter second number", type: "number", name: "secondNumber" },
    {
        messeage: "select one of operater to perform action",
        type: "List",
        name: "operator",
        choises: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//CONDITIONAL STATEMEMNT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.first - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNmuber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNmunber);
}
else
    ("please select correct operator");
