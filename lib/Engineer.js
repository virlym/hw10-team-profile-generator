// Engineer class. inherits from Employee.
// Requires : name, id, email, gitHub
const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.github = gitHub;
        this.role = "Engineer";
    }

    getGithub(){
        return (this.github);
    }
}

module.exports = Engineer;