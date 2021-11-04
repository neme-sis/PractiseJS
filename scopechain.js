/*Kid method can access itself, parent and grand-parent method.
Parent method can access itself & Grand-parent method.
Grand-parent method can access itself.

Inner scope can access outer scope.
Outer scope can't access inner scope.*/

var user= "Sayan";
var foo= function(){
    var user="Sampriti";
    var foo2= function(){
        var user="Gairik";
        console.log(user);
    } 
    foo2();
}

foo();