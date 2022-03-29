let sum = 0;
let readlineSync=require("readline-sync")
var number = readlineSync.questionInt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum =sum+remainder

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (number% sum==0) {
    console.log(`${number} is an Harshad number`);
}
else {
    console.log(`${number} is not an harshad number.`);
}