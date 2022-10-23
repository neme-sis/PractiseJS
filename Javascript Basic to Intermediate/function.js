//In C programming-->
// int a = 3
// int func(){
//     printf("It's my function");
// }
// main--->
// func();



// function printNumber(n){
//     // console.log("It's my function and it gives value: "+n);
//     return "It's my function and it gives value: "+n;
// }

//     var n=3;
//     var response=printNumber(n);
//     console.log(response);
//     console.log(printNumber());


// function printNumber(){
//     // console.log("It's my function and it gives value: "+n);
//     return "It's my function and it gives value: ";
// }

//     var num=25;
//     // var response=nam(num);
//     // console.log(response);
//     console.log(printNumber);       //Referencing a function--> type and name output
//     console.log(printNumber());     //Calling a function

var printNumber = function(n){
    // console.log("It's my function and it gives value: "+n);
    return "It's my function and it gives value: "+(n);
}

    var num=25;
    var response=printNumber(num);
    console.log(response);          //print variable to store value return function
    console.log(printNumber());     //Calling a function

    console.log(printNumber);       //Referencing a function--> type and name output


