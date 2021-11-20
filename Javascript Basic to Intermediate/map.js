var myMap = new Map();

myMap.set("Rusha","Gairik");
myMap.set("SSD","Sampriti");
myMap.set("JS", "Sayan");

for(let index of myMap.keys()){
    console.log(index);
}

for(let [index,val] of myMap){
    console.log(index);
    console.log(val);
}