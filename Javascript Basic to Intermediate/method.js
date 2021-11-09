var student = {
    firstName : "Gairik",
    lastName : "Bihari",
    age : 19,
    email : "gairiklovesrusha@gmail.com",
    isLoggedInFacebook : true,


    studentsList : [],
    insertNewStudent: function(studentName){      //Method
        this.studentsList.push(studentName);
    },

    getStudentNumber : function (){             //getter method
        return `Your name is ${this.firstName}
and you suggested students of number ${this.studentsList.length}`;
    }
};


student.insertNewStudent("Sampriti");
console.log(student);
console.log(student.getStudentNumber());
