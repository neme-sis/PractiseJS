var sam = 27;
var tostore = function(s) {
    return "ami ghurte jabo " + s + "..  th";
}
console.log(tostore()); //by calling it it will not come with the value........if we store the fun in a var.
//but if i store the return type in a var

var response = tostore(sam);
console.log(response);