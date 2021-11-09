//find method
//object.find(function reference)
//output--> the first value it finds about our condition
//Condition must match,
//returns value immediate after the index of the condition value

var a = new Array(4, 6, 10, 11, 10, 8);

console.log(a.find((num) => (num>6)));


//same as indexOf method, indexOf uses element, findIndex uses function reference

console.log(a.findIndex((num)=>(num==12)));


//Method lastIndexOf
//Returns index from last by searching

console.log(a.lastIndexOf(10));