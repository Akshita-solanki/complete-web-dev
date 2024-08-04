const prompt = require('prompt-sync')();


// write program to greet person with first and lastname

let firstname = prompt("Enter your first name: ");
let lastname = prompt("Enter your last name: ");
console.log("Hello " + firstname + " " + lastname)

// greet based on gender

let gender = prompt("Whats your gender F/M : ");
if (gender == "F" || gender == "f") {
    console.log("Hello She");
}
else {
    console.log("Hello He");
}

// program to sum from 0-100

let count = 0
for (let i = 0; i < 100; i++) {
    count = count + i;
}
console.log(count);

// arrays and stings

// print all even numbers in an array

let arrryNum = [2, 1, 7, 8, 10, 6, 22];

for (i = 0; i < arrryNum.length; i++) {
    if (arrryNum[i] % 2 == 0) {
        console.log(arrryNum[i]);
    }
}

// print largest number in an array

let arrryNums = [2, 1, 7, 8, 10, 6, 22, 9];
let largestNum = arrryNums[0];
for (i = 1; i < arrryNums.length; i++) {
    if (arrryNums[i] > largestNum) {
        largestNum = arrryNums[i];
    }
}
console.log(largestNum);

// print name if male

let genderNameDict = [{

    firstName: "Ram",
    gender: "M",

}, {

    firstName: "Sita",
    gender: "F",
}, {

    firstName: "Krishna",
    gender: "M",

}, {

    firstName: "Radha",
    gender: "F",

}]

for (i = 0; i < genderNameDict.length; i++) {
    if (genderNameDict[i]["gender"] == "M") {
        console.log(genderNameDict[i]["firstName"]);
    }
}

// sum function 

function sum(a, b) {
    return a + b;
}

// pass function as argument  -- callbacks

function sum(num1, num2, fnToCall) {
    let resultSum = num1 + num2;
    // Invoke the passed function with the resultSum as argument
    fnToCall(resultSum);
}

function result(sum) {
    console.log("Result of the sum is : " + sum);
}

function resultInPassive(sum) {
    console.log("Sum's result is : " + sum);
}

// Pass the function reference without invoking it
const ans = sum(3, 9, result);

