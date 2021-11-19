var User = {
    fname:"n",
    age: 0
};

var gairik = Object.create(User, {
    fname: {value: "Gairik"},
    age: {value: 20},
});

console.log(gairik.fname);
console.log(gairik.age);