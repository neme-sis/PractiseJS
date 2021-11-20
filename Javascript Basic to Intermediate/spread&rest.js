function sum(a,b){
    return a+b;
}

var arr = [5,6];

console.log(sum(...arr));      //spread operator

console.log(sum2(2,5));
console.log(sum2(2,5,4));
console.log(Math.max(2,5,6,7,2,5,1,5,8,2,8,7,2));

function sum2(...args){     //rest operator
    var sum = 0;
    for(var i in args)
    sum+=args[i];
    return sum;
}