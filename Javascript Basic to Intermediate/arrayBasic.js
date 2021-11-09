/* Array: A contiguous memory location storing values of multiple datatypes,
having random access by index number...*/
//object.method--> syntax general

var arr = ["Gairik", "Sampriti", "Sayan"];   //as a variable

var a = new Array("Gairik", "Sampriti", "Sayan", "Bata", "Mono");   //as an object

// console.log(a);

a[0]= "Rusha";
console.log(a[0]);
console.log(a);

console.log(a.length);  //gives length of array



//push, pop method
//push: enters element at the last pos of the array
//pop: pops out last element of the array

a.pop();
console.log(a);

a.push("Mono");
console.log(a);

//unshift, shift method
// unshift: - enters element at the first pos of the array
//shift:- pops out first element of the array

a.unshift("Bedu");
console.log(a);
a.shift();
console.log(a);