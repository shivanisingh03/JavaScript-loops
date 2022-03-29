// sum of the number 
var i=0
var sum=0
while (i<10){
    let readlinesync=require("readline-sync")
    var num=readlinesync.questionInt("Enter the numbers ")
    sum=sum+num
    console.log(sum)
    i++
}



