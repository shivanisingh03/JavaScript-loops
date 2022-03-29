let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter the number: ")
var re=0
while(number>0){
    re=re*10+number%10
    number= parseInt(number / 10); // convert float into integer

}
num1=parseInt(re/10)
num=num1*10
console.log(num)
    






