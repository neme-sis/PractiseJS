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
}

var gairik = new User("gairik","abc@gmail.com");
gairik.setCourseName("React Js");
gairik.setCourseName("GO");

console.log(gairik.courseList);
console.log(gairik.getCourseList());

module.exports  = User;
