// // parseInt or parseFloat

// var myString = "44";
// var myNumber =parseInt(myString)
// console.log(typeof myString);


// var myString = "44.5";
// var 

// myNumber = parseFloat(myString)
// console.log(myNumber);

// concatention in javascript\

// var str = "hello  " + "hello";
// console.log(str);




// ternary operator

// var age = 15;
// var results = age >= 15? "yes" : "No"
// console.log(results);


// var score = 59;
// var results =  score >= 60? "pass" : "fail";
// console.log(results);

// Control statments and loops


// var temp = 30;
// if(temp >=30){
//     console.log("You can go outside");
    
// }else{
//     console.log("not go outside");
    
// }


// var temp = 5;
// if(temp >=30){
//     console.log("You can go outside");
    
// }else if(temp >20 && temp > 10){
//     console.log(" YEs also go to outside");
    
// }
// else{
//     console.log("soo jawo");
    
// }


// even Number

// var num = 6;
// if(num % 2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
    
// }

// var num = -12;
// if (num == 0) {
//     console.log("number is zero");
// }else if(num > 0){
//     console.log("Greater then zero positive");
    
// }else{
//     console.log("Number is negative");
    
// }

// switch statments

// var days = "Tuesday";
// switch (days) {
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today is Friday");
//         break;
//     case "Tuesday":
//         console.log("Today is saturday");
//         break;

//     default:
//         console.log("No condition match");
        
//         break;
// }




// interview question

// var areaOFShape = "square";
// var a = 5;
// var b = 5; 
// var results;

// switch (areaOFShape) {
//     case "square":
//         results = a * a;
//         console.log(results);
        
//         break;
//     case "rectangle":
//         results = a * b;
//         console.log(results);
        
//         break;
//     case "circle":
//         var r = 2;
//         results = 3.142 * (r * r);
//         console.log(results);
        
//         break;

//     default:
//         console.log("no shape match");
        
//         break;
// }

// Loops while do-while and for loop

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }
// do-while 

// let i = 1;
// do {
//     console.log(i);
//     i++
    
// } while (i <=10);

// for loops

// for(var i = 1; i <= 10; i++){
//     console.log(i);
    
// }

// let i = 1;

// while(i <=10){
//     console.log("1 * " + i + " = " + 18 * i);
//     i++;
// }
// var userInput;
// var positiveNum;
// do{
//     userInput = prompt("Enter valid number ")
//     positiveNum = parseFloat(userInput)

// }while(isNaN(positiveNum) || positiveNum < 0);
// console.log("It's valid number " , positiveNum);

// var sum = 3;
// for(var i = 3; i <= 10; i++){
//     var sum = i + i;
//     console.log(i);
    
// }

// var num = 13;
// var isPrime;

// for (var i=2; i <num; i++){
//     if(num % i == 0){
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log("The number is prime");
// }else{
//     console.log("Number is not prime");
    
// }

// var year = 2024;

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log("it is leap year");
// }else{
//     console.log("it is not a leap year");
    
// }

// Topic Functions

// function sum(){
//     var a = 10;
//     var b = 5;
//     console.log( "The sum of a and b = " , a + b);
    
// }
// sum();

// function greet(name) { 
//     console.log("Hello " + name + " Welcome back to function");
    
// }
// greet("Gul");
// greet("Aiza");

// Function Expersion

// var result =  function sum(a, b){
//     console.log(a+b);
// }
// result(10, 40)
    // sum(10, 10) not working because it's assign to result 
 

    // IIFE

//   var result = (function(a,b){
//         console.log(a + b);
        
//     })(10, 16)

