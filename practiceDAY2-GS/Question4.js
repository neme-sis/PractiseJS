// Question 4

function divbythree(number){
    if(number%3==1)
    return false;

    return true;
}

var arr= new Array(2,0,6,8,10);
var divthree = arr.every(divbythree);

if(divthree)
console.log("All the elements are divisible by three");
else
console.log("All elements are not divisible by three");
