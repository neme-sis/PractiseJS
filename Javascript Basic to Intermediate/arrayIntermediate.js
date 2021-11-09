var a = new Array("Gairik", "Sampriti", "Sayan", "Bata", "Mono");

//object.method--> syntax general

//Searching
//method--> indexOf("Element"), returns element index, if there,
// returns -1 if not there


var indexOfSearchedElement= a.indexOf("Bata");
console.log(indexOfSearchedElement);

var indexOfSearchedElement= a.indexOf("Honululu");
console.log(indexOfSearchedElement);


//Splitting
//Object--> Array
//method-->from("Element")

var splitArray = Array.from("Gairik");
console.log(splitArray);


//Every element accessible without loops
//method--> every(<function reference>)

function isEvenFunction(number){
    if(number%2)    //0,1
    return false;

    return true;
}

var arr= new Array(2,0,6,8,10);
var isEven = arr.every(isEvenFunction);

if(isEven)
console.log("A even elements' array");
