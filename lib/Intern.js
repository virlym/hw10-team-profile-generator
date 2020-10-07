// Intern class. inherits from Employee.
// Requires : name, id, email, school
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool(){
        return (this.school);
    }
}

module.exports = Intern;