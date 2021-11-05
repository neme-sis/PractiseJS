function divisable(number) {
    if (number % 3 == 1)
        return false;

    return true;
}

var arr = new Array(3, 6, 9, 12, 39);
var bythree = arr.every(divisable);

if (bythree)
    console.log("All are divisable by 3 array");