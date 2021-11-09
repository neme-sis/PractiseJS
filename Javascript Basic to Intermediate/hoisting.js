//compare with variable scope

/*
Rules- HOISTING:
1. variables are declared and made undefined
2. funtions are declared and made available
*/ 


// var size = 2;

// foo(size);

// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }


// foo(size);

// var size = 2;

// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }


// foo(size);

// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }

// var size = 2;



// var size = 2;

// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }

// foo(size);


// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }

// var size = 2;

// foo(size);


// function foo (n){
//     console.log("Gairik er aloo choto and size "+ n);
// }

// foo(size);

// var size = 2;


// Exception case:
var size = 2;

foo(size);

var foo = function(n){
    console.log("Gairik er aloo choto and size "+ n);
}


var name1= "Shahrukh";

var fun=function (){
    var name1= "Sampriti";
    var name2=" Soumya Subhro Dutta";
    console.log(name1 + name2);
}
fun();
console.log(name1);