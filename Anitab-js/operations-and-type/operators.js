let a = 30;
console.log(a);

// Arithmetic Operators

const num = 10;
const num2 = 30;
//addition +
console.log(num + num2);
console.log(num - num2);
console.log(num / num2);
console.log(num * num2);
console.log(num % num2);

let age = 39;
age++;
console.log("age" , age);
console.log(age);
age--;
console.log(age);

console.log({age});

age +=5;
console.log("new Age", age);

let powerNum = num ** num2;
console.log(powerNum);


//Comparison Operators--return true or false
let b = 10;
let c = "10";
let comparison = b == c;
let notEqual = b != c;
console.log("comparison", comparison);
console.log("Not Equal", notEqual);
let strictly = b ===c;
console.log("strictly", strictly);
let strictlyNot = b !== c;
console.log({strictlyNot});


//Logical Operators--also returns true or false
const age1 = 25;
const age2 = 38;

if(age1 < age2 || num > num2) {
console.log(true)

}
else{
    console.log(false)
}

