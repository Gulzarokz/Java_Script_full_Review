console.log("EcmScript");


// var myName = "GUlzar";
// myName = "Gulzar khan";
// console.log(myName);

// let myName = "GUlzar";
// myName = "Gulzar khan";
// console.log(myName);

// const myName = "GUlzar"; it con't be reassign 
// myName = "Gulzar khan";
// console.log(myName);

// example with var

// var name = "gulzar";

// if(true){
//     var name = "Gulzar khan";
//     console.log(name);
// }
// var name = "Aiza";
// console.log(name);

// example with let

// let name = "gulzar";

// if(true){
//     let name = "Gulzar khan";
//     console.log(name);
// }
//  name = "Aiza";
// console.log(name);


// example with const

// const name = "gulzar";

// if(true){
//     const name = "Gulzar khan";
//     console.log(name);
// }
//  name = "Aiza";
// console.log(name);

// Templete literal

// let firstName = "Gulzar";
// let secondName = "Khan";
// // let  fullName = firstName + secondName;
// // templet literal
// let fullName = `My name is ${firstName}  ${secondName}`
// console.log(fullName);


// let age = 23;
// let message = `I am ${age} year old`;
// console.log(message);

// Arrow function =>

    // let sum = (a, b)=>{
    //     let results = `The sum of ${a} and ${b} is ${a + b}`;
    //     console.log(results);
        
    // }
    // sum(5, 10);

    // let sum = (a, b)=> console.log(`The sum of ${a} and ${b} is ${a + b}`);
    // sum(4, 6)
    

//calculator

function calculator(num1, num2, operator){
    let results
    switch (operator) {
        case "+":
        results = num1 + num2;
        return results; 

        case "-":
        results = num1 - num2;
        return results;  

        case "*":
        results = num1 * num2;
        return results;  

        case "/":
        results = num1 / num2;
        return results;  
            
    
        default:
            console.log("No operator is match");
            
            break;
    }
}

// console.log(calculator(6, 5, "+"))
console.log(calculator(6, 5, "-"))
// console.log(calculator(6, 5, "*"))
// console.log(calculator(6, 5, "/"))
// console.log(calculator(6, 5, "%"))