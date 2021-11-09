var nameOfUsers=["Gairik", "Sampriti", "Bata", "Sayan"];

for(var i=0; i<nameOfUsers.length; i++){
    console.log(nameOfUsers[i]);
}

let i= 0;
while(i<nameOfUsers.length){
    console.log(nameOfUsers[i]);
    i++;
}


//forEach is a method, not a loop
//Object.forEach((parameter)=>(print parameter))    //To print the values

nameOfUsers.forEach((index)=>(console.log(index)));