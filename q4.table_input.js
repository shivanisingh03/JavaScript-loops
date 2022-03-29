let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=num;i++) {
    //    multi=num*i;
    for(let j=1;j<=10;j++){
        console.log(i + " *" + j + "=" + num*j)
    }
    console.log()
}
   

let n=require("readline-sync");
let num1=parseInt(n.question("enter number: "));
var i=1
while(i<=num1){
    var j=1
    while (j<=10){
        console.log(i + " *" + j + "=" + num1*j)
        j++
    }
    console.log()
    i++

}


