// local file includes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const render = require("./lib/htmlRenderer.js");
const questionBuilder = require("./lib/questionBuilder.js");

// outside includes
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// global variables
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employees = [];
let htmlDoc;


// get the role of the new employee
function addEmployee(){
    inquirer.prompt(questionBuilder.questionBuilder("Init")).then(function (response) {
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

// add an employee to the list of the Intern role
// then either add a new employee or create the html document
function addIntern(){
    inquirer.prompt(questionBuilder.questionBuilder("Intern")).then(function (response) {
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

// add an employee to the list of the Engineer role
// then either add a new employee or create the html document
function addEngineer(){
    inquirer.prompt(questionBuilder.questionBuilder("Engineer")).then(function (response) {
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

// add an employee to the list of the Manager role
// then either add a new employee or create the html document
function addManager(){
    inquirer.prompt(questionBuilder.questionBuilder("Manager")).then(function (response) {
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

// if the create the html file in the output folder
// if the output folder does not exist, create it
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

// start the cycle
addEmployee();
