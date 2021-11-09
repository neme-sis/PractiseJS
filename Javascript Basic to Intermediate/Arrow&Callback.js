//Arrow Operator

// var isEvenFunction = (number) => {
//     // if(number%2)    //0,1
//     // return false;

//     // return true;

//     return (number%2===0);
// }

// var arr= new Array(2,0,6,8,10);
// var isEven = arr.every((num) => {
//     return (num%2===0);
// });

// if(isEven)
// console.log("A even elements' array");


//CallBack Function ---> (parameter)=> (returning statement)

var arr= new Array(2,0,6,8,10);
var isEven = arr.every ((num) => (num%2===0));      //Declaration and calling together

if(isEven)
console.log("A even elements' array");