import promptSync from "prompt-sync";
const prompt = promptSync();
let input1 = prompt("Enter first integer: ");
let input2 = prompt("Enter second integer: ");
let num1 = Number(input1);
let num2 = Number(input2);
   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.log("Invalid input: Please enter valid integers.");
} 
   else {
    console.log("Addition: " + (num1 + num2));
    console.log("Subtraction: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));

    if (num2 === 0) {
        console.log("Cannot divide by zero.");
    } else {
        console.log("Division: " + (num1 / num2));
    }
}



