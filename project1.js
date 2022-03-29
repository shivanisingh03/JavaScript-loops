var num=1
while (num<=10){
    let readlinesync=require("readline-sync")
    var n=readlinesync.questionInt("Enter the numbers ")
    

    {
        if (n<5){
            console.log(n,"aapka number chota hai! Ek aur baar try karo")
        }
        else if(n>5){
            console.log(n,"aapka number bada hai! Ek aur baar try karo")
        }
        else if(n==5){
            console.log("correct guess\nwaah! Aapne number guess kar liya")
            
        }
        else{
            console.log("it is not equal\nyour guessing chance is finished")
        n++
        }
    }
}