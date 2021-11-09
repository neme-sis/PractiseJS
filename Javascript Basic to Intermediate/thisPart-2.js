//Regular functions have Global context when it is called

var human = {
    name: "Sampriti",
    age: 20,
    weight: 162,
    
    returnScope: function(){
        obj3();
        function obj3(){
            console.log("Line 8"+this);
        }
        
        console.log("Line 11"+ this);
    },

};

function window(){
    console.log("Line 17"+this);
}

human.returnScope();
window();
console.log(this);
