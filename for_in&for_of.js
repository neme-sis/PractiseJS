var nameOfUsers=["Gairik", "Sampriti", "Bata", "Sayan"];

for(var i of nameOfUsers)       //for of --> Used for array
console.log(i);


var human = {
    name: "Sampriti",
    age: 20,
    weight: 162
};


for(var i in human){   
    console.log(i);             //for in---> used for structure
    console.log(human[i]);
}