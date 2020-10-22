// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

function Employee(role, name) {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What type of employee would you like to add?",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "prompt",
                name: "name",
                message: "What is the employees name?"
            },
            { type }
        ])
        .then(function (response) {
            let newEmployee = Employee(role, name);
            return newEmployee
        })

}
}


