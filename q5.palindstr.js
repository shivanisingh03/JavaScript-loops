const n=require("readline-sync")
var name=n.question("Enter the string value: ")
const newname=name;
var str="";
for (let i=name.length-1;i>=0;i--){
    str=str+name[i]
}
if (newname==str){
    console.log("palindrome ")
}
else{
    console.log("not palindrome ")
}          



