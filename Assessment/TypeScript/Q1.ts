import PromptSync from 'prompt-sync';
const prompt = PromptSync();
let n1:number = Number(prompt("Enter first number:"));
let n2:number = Number(prompt("Enter second number:"));

console.log("Addition:",n1+n2);
console.log("Subtraction:",n1-n2);
console.log("Multiplication:",n1*n2);
if(n2 == 0){
   console.log("Cannot divided by zero");
}
else {
    console.log("Divison:",n1/n2);

}