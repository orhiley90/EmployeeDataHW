// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        let role = "Engineer";
        super(name, id, email, role);
        this.github = github;
    }
    getGithub(){
        let g = this.github;
        return g;
    }
}

    module.exports = Engineer;