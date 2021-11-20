//destructure --> picking up values

// var pc = ["lenovo", 6, "i-5"];

// var [name, core, pname] = pc;
// console.log(pname);

var personalComputer={
    name: "lenovo",
    core : 6,
    pname: "i-5"
};

var {name,core,pname} = personalComputer

console.log(pname);