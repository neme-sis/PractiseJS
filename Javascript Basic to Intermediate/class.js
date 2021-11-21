class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];
    setCourseName(course){      //setter
        this.#courseList.push(course);
    }
    getCourseList(){    //getter
        return this.#courseList;
    }
    getPassword(){
        console.log("Password is private");
    }
}

class childUser extends User{
    constructor(name, email){
        super(name,email);
    }
    isLoggedin(){
        return true;
    }
}

var gairik = new User("gairik","abc@gmail.com");
// gairik.setCourseName("React Js");
// gairik.setCourseName("GO");

// console.log(gairik.courseList);
// console.log(gairik.getCourseList());

var bata = new childUser("bata","abcdw");
console.log(User.getPassword());

module.exports  = User;
