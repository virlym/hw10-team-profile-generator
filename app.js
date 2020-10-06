const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
let htmlDoc;


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addEmployee(){
    inquirer.prompt(
        [
            {
                type: "list",
                message: "What role does the employee have in the company?",
                choices: ["Intern", "Engineer", "Manager"],
                name: "roleAns"
            }
        ]
    ).then(function (response) {
        if (response.roleAns === "Intern") {
            addIntern();
        }
        else if (response.roleAns === "Engineer") {
            addEngineer();
        }
        else{
            addManager();
        }
    });
}

function addIntern(){
    inquirer.prompt(
        [
            {
                type: "prompt",
                message: "What is the Intern's name?",
                name: "nameAns"
            },
            {
                type: "prompt",
                message: "What is the Intern's id?",
                name: "idAns"
            },
            {
                type: "prompt",
                message: "What is the Intern's email?",
                name: "emailAns"
            },
            {
                type: "prompt",
                message: "What is the Intern's school?",
                name: "schoolAns"
            },
            {
                type: "list",
                message: "Would you like to add another employee?",
                choices: ["Yes", "No"],
                name: "empAns"
            }
        ]
    ).then(function (response) {
        employees.push(new Intern(response.nameAns, response.idAns, response.emailAns, response.schoolAns));
        if(response.empAns === "Yes"){
            addEmployee();
        }
        else{
            htmlDoc = render(employees);
            makeFile();
        }
    });
}

function addEngineer(){
    inquirer.prompt(
        [
            {
                type: "prompt",
                message: "What is the Engineer's name?",
                name: "nameAns"
            },
            {
                type: "prompt",
                message: "What is the Engineer's id?",
                name: "idAns"
            },
            {
                type: "prompt",
                message: "What is the Engineer's email?",
                name: "emailAns"
            },
            {
                type: "prompt",
                message: "What is the Engineer's GitHub?",
                name: "githubAns"
            },
            {
                type: "list",
                message: "Would you like to add another employee?",
                choices: ["Yes", "No"],
                name: "empAns"
            }
        ]
    ).then(function (response) {
        employees.push(new Engineer(response.nameAns, response.idAns, response.emailAns, response.githubAns));
        if(response.empAns === "Yes"){
            addEmployee();
        }
        else{
            htmlDoc = render(employees);
            makeFile();
        }
    });
}

function addManager(){
    inquirer.prompt(
        [
            {
                type: "prompt",
                message: "What is the Manager's name?",
                name: "nameAns"
            },
            {
                type: "prompt",
                message: "What is the Manager's id?",
                name: "idAns"
            },
            {
                type: "prompt",
                message: "What is the Manager's email?",
                name: "emailAns"
            },
            {
                type: "prompt",
                message: "What is the Manager's office number?",
                name: "officeAns"
            },
            {
                type: "list",
                message: "Would you like to add another employee?",
                choices: ["Yes", "No"],
                name: "empAns"
            }
        ]
    ).then(function (response) {
        employees.push(new Manager(response.nameAns, response.idAns, response.emailAns, response.officeAns));
        if(response.empAns === "Yes"){
            addEmployee();
        }
        else{
            htmlDoc = render(employees);
            makeFile();
        }
    });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function makeFile(){
    if (!fs.existsSync("./output")){
        console.log("make dir if");
        fs.mkdir("./output", function(error){
            if(error){
                throw error;
            }
            fs.writeFile(outputPath, htmlDoc, function(error){
                if(error){
                    throw error;
                }
                console.log("file has been created");
            });
        });
    }
    else{
        fs.writeFile(outputPath, htmlDoc, function(error){
            if(error){
                throw error;
            }
            console.log("file has been created");
        });
    }
}

addEmployee();
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
