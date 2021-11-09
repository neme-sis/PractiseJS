var arr = new Array(2, 4, 6, 8, 10, 11);

//fill method
//syntax--> object.Fill(value, StartingIndex(Default=0),
// EndingIndex(Default = object.length))
//range--> [low, high)

console.log(arr.fill("Gairik", 2, 4));
console.log(arr.fill("Gairik", 2));
console.log(arr.fill("Gairik"));


//filter Method
//syntax--> object.filter( (parameter) => (Condition to filter) )

var arr2= arr.filter( (element)=>(element>=6) );
console.log(arr2);