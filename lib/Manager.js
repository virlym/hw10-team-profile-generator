// manager class. inherits from Employee.
// Requires : name, id, email, officeNumber
const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.officeNumber = office;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return (this.officeNumber);
    }
}

module.exports = Manager;