
let readlineSync=require("readline-sync")
var n=readlineSync.questionInt("enter the number: ")
var a=0
var b=1
var sum=0
var count=1
while (count<=n){
    console.log(sum,end=" ")
    count+=1
    a=b
    b=sum
    sum=a+b 
}


