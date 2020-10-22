// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        let role = "Intern";
        super(name, id, email, role);
        this.school = school;

    }
    getSchool(){
        let s = this.school;
        return s;
    }
}
module.exports = Intern;