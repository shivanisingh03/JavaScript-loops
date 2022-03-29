var n=require("readline-sync");
const num=n.questionInt("enter number: ");
let i=1
var count=0;
while (i <=10    )  {
       if (num%i==0) 
       count=count+1
       i++;
}
if (count==2) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}




