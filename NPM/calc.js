const readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt("Please enter your first number: ");
var num2 = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation to perform: (a)dd, (s)ubtract, (m)ultiply, (d)ivide ");

//Adding two numbers
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

//Subtracting two numbers
function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}

//Multiplying two numbers
function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

//Dividing two numbers
function divideTwoNumbers(num1, num2){
    return num1 / num2;
}
    
//function definitions add, sub, mul, div of two numbers
function myCalculator(num1, num2, enteredOperator){
    if (enteredOperator == "a"){
        console.log("When You Add the First Number: " + num1 + " with the Second Number: " + num2 +  " it gives you a result of: " + addTwoNumbers(num1, num2));
    }
    else if(enteredOperator == "s"){
        console.log("When You Subtract the First Number: " + num1 + " with the Second Number: " + num2 +  " it gives you a result of: " + subtractTwoNumbers(num1, num2));
    }
    else if(enteredOperator == "m"){
        console.log("When You Multiply the First Number: " + num1 + " with the Second Number: " + num2 +  " it gives you a result of: " + multiplyTwoNumbers(num1, num2));
    }
    else if(enteredOperator == "d"){
        console.log("When You Divide the First Number: " + num1 + " with the Second Number: " + num2 +  " it gives you a result of: " + divideTwoNumbers(num1, num2));
    }

}
myCalculator(num1, num2, enteredOperator);