//Basic

function gairik(){
    var n = "Gairik Sharma";
    function rusha(){
        console.log(n);
    }
    return rusha;
}

// var bts = gairik();

// bts();

gairik()();


//Advanced

//Add two numbers using closure property

function getAddition(num1){
    return (function setNum2(num2){
        return num1+num2;
    });
}

var fullSum = getAddition(5);

console.log(fullSum(6));