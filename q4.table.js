// in while loop

let readlinesync=require("readline-sync")
var num=readlinesync.questionInt("enter that number which's table you want: ")
var i=1
while (i<=10){
    num1=num*i
    console.log(num1);
    i++;
}


// in for loop

let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=10;i++) {
       multi=num*i;
       console.log(num + " *" + i + "=" + multi)
   }



// in do-while loop

var readlinesync=require("readline-sync")
var num=readlinesync.questionInt("enter the number: ")
var i=1
do{
    console.log(num + " *" + i + "=" + num*i)
    i++
} while(i<=10)








