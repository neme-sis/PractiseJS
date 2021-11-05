var arr1 = new Array(2, 4, 6, 8, 10, 11);

//Method slice
//Syntax--> object.slice(StartIndex, EndIndex)

var ansArray= arr1.slice(2, 4);
console.log(ansArray);


//Method splice
//Syntax--> object.splice(StartingIndex, Count, Replacable value[])

// var arr = new Array("Gairik", "Sampriti", "Bata", "Sayan");
var arr = new Array(2, 4, 5, 7, 10);

arr.splice(1,2,"HI","Bye","Soumya");
console.log(arr);