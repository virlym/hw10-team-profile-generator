// a function that defines the questions for inquirer
// takes in a question section variable, returns a string of objects that inquirer can use for prompt
function questionBuilder(buildType) {

    // intro question to get employee type
    const empType = [
        {
            type: "list",
            message: "What role does the employee have in the company?",
            choices: ["Intern", "Engineer", "Manager"],
            name: "roleAns"
        }
    ];

    // general questions on all employee types
    const genQuest = [
        {
            type: "prompt",
            message: `What is the ${buildType.toLowerCase()}'s name?`,
            name: "nameAns"
        },
        {
            type: "prompt",
            message: `What is the ${buildType.toLowerCase()}'s id?`,
            name: "idAns"
        },
        {
            type: "prompt",
            message: `What is the ${buildType.toLowerCase()}'s email?`,
            name: "emailAns"
        }
    ];

    // intern role question
    const internType =
    {
        type: "prompt",
        message: "What is the Intern's school?",
        name: "schoolAns"
    };

    // engineer role question
    const engineerType =
    {
        type: "prompt",
        message: "What is the Engineer's GitHub?",
        name: "githubAns"
    };

    // manager role question
    const managerType =
    {
        type: "prompt",
        message: "What is the Manager's office number?",
        name: "officeAns"
    };

    // question to continue adding employees
    const continueQuest =
    {
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
        name: "empAns"
    };


    const questionBuild = [...genQuest];

    if (buildType === "Init") {
        return (empType);
    }
    else if (buildType === "Intern") {
        questionBuild.push(internType);
    }
    else if (buildType === "Engineer") {
        questionBuild.push(engineerType);
    }
    else {
        questionBuild.push(managerType);
    }

    questionBuild.push(continueQuest);
    return (questionBuild);
}

module.exports = {
    questionBuilder: questionBuilder
};