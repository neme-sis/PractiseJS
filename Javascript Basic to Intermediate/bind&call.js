var User1 = {
    fname: "Gairik",
    lname: "Roy",

    getFname: function(){
        console.log(this.fname);
    }
};

var User2 = {
    fname: "Sampriti",
    lname: "Dutta Mondal"
};

User1.getFname();
User1.getFname.call(User2);     //calls the method

var init= User1.getFname.bind(User2);       //returns ref of the method
init();