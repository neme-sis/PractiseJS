//new and prototype keyword usage
//class--> definition of some objects


var player = function(nameOfPlayer, age, game){     //prototype of an object
    this.nameOfPlayer = nameOfPlayer;
    this.age= age;
    this.game = game;

    this.getGame= function (){
        console.log(this.game);
    }
    // this.getAge= function (){
    //     console.log(this.age);
    // }
}

player.prototype.getAge = function(){
    console.log(this.age);
}

var gairik = new player("Gairik", 56, "Ludo");
var sam = new player("Sam", 63, "Uno");
gairik.getGame();
sam.getAge();