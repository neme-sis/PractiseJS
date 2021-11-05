badu(size);

var size = 30;

function badu(n) {
    console.log("Gairik er aloo choto but bedu er size is  " + n);
}
//this is the 1st case where variable have been  declared late so it make it undefined.but at the same time funtion is called before the function but in funtion it is available

var size = 30;

function badu(n) {
    console.log("Gairik er aloo choto but bedu er size is  " + n);
}
badu(size);
//in this case variable  declared 1st do it is available.