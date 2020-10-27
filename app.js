const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let name = "";
let id = "";
let role = "";
let email = "";

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function askQuestions() {
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
            {
                type: "prompt",
                name: "id",
                message: "What is your ID number?"
            },
            {
                type: "prompt",
                name: "email",
                message: "What is your email address?",
            },
            {
                type: "prompt",
                name: "officeNumber",
                message: "What is your office number?",
                when: (answers) => answers.role === "Manager",
            },
            {
                type: "prompt",
                name: "github",
                message: "What is your github username?",
                when: (answers) => answers.role === "Engineer",
            },
            {
                type: "prompt",
                name: "school",
                message: "What school are you attending?",
                when: (answers) => answers.role === "Intern",
            },
            {
                type: "list",
                name: "another",
                message: "Would you like to add another employee?",
                choices: ["Yes", "No"]
            }
        ])
        .then(function (response) {

            let employees = [];
            let managers = [];
            let engineers = [];
            let interns = [];
            let another = response.another;
            console.log(response);
            let newEmployee = new Employee(response.name, response.id, response.email, response.role);
            employees.push(newEmployee);
            if (another === "No") {


                fs.writeFile("employees.json", "utf8", function (err, newEmployee) {
                    if (err) {
                        throw err;
                    }

                   



                    // For each element in animal
                    console.log(employees);
                    employees.forEach(function (employee) {
                        console.log(employee.role);
                        if (employee.role === "Manager") {
                            console.log("this happened");
                            
                            managers.push(employee);
                            
                        }
                        else if (employee.role === "Engineer") {
                            engineers.push(employee);
                        }
                        else if (employee.role === "Intern") {
                            interns.push(employee);
                        }

                    });
                    
                    
                    const managersJSON = JSON.stringify(managers, null,2);
                    console.log(managersJSON);
                    const engineersJSON = JSON.stringify(engineers, null, 2);
                    const internsJSON = JSON.stringify(interns, null, 2);
                   

                    fs.writeFile("managers.json", managersJSON, function (err) {
                        if (err) {
                            throw err;
                        }

                        console.log("Successfully wrote to managers.json file");
                    });
                    fs.writeFile("engineers.json", engineersJSON, function (err) {
                        if (err) {
                            throw err;
                        }

                        console.log("Successfully wrote to engineers.json file");
                    });
                    fs.writeFile("interns.json", internsJSON, function (err) {
                        if (err) {
                            throw err;
                        }

                        console.log("Successfully wrote to interns.json file");
                    });

                })

            }
            else {
                askQuestions();
            }

        })
}
askQuestions();







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
