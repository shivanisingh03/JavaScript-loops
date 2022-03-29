
let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter the number ")
let factor=1
while (number>0){
    factor=factor*number
    number-=1
console.log(factor)
}