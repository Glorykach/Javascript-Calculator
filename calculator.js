const operator = prompt("Kindly enter the operation you wish to perform( either +, -, * or /):");
const num1 = parseFloat(prompt(" Enter Number 1:"));
const num2 = parseFloat(prompt("Enter Number 2:"));

let result;

if(operator=="+")
{
    result = num1 + num2;
} 
else if(operator=="-")
{
    result = num1 - num2
}
 else if(operator=="*")
{
    result = num1 * num2;
} 
 else if (operator=="/")
{
    result = num1 / num2;
} 
alert("The result is " + result);
