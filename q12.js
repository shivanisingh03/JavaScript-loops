sum=0
for(var i=1;i<=10;i++){
    let readlinesync=require("readline-sync")
    var num=readlinesync.questionInt("Enter the value: ")
    sum=sum+num
    console.log(sum)
}








