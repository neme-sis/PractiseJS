/* "this" keyword gives us the locality or the scope details
we are currently working on. (FOR NOW) */

console.log(this);

function foo(){
    console.log(this);
}

foo();