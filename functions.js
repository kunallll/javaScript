/* Functions are re-usable code of lines
*/

// function doSomething(){
//     console.log("Hello World");
// }

// doSomething();

/* If the function name is just called with the paranthesis 
then the console returns the function body */

/* Arguements in js:
*/

// function square(num){
//     console.log(num * num);
// }

square(10); // it would print 100 in the console

// In js, function arguements aren't given a data type during declaration.
// Only the name of the variable is given in funtion '()'

/*In js, if the number of formal arguements are 3 and the actual
arguements that we give in the function call statement, the function
would still work without any error. */

//Functions can be declared as variables in js

// var sayHi = function(){
//     console.log("Hi");
// }

// // Functions returning a value:

// function square(num){
//     return num*num;
// }

// console.log(square(10));

// By default a function returns undefined
// Types of defining a function: 
// 1. Function declation (check function square())
// 2. Function expression (check function sayHi())


// function isEven(num){
//     if(num % 2 === 0)
//         return true;
//     else
//         return false;
// }

// var x = isEven(19);

// console.log(x);

// function factorial(num){
//     var j = 1;
//     for(var i=1;i<=num;i++){
//         j*=i;   
//     }
//     return j;
// }

function kebabToSnake(S){
   var str =  S.replace(/-/,"_");
   console.log(str);
}
//replace is a method for string operations, 
//the regular expression is : newString = oldString.replace(/old_char/,"newchar");

