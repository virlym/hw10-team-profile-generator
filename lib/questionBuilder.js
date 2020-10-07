function questionBuilder(buildType){

    const empType = [
        {
            type: "list",
            message: "What role does the employee have in the company?",
            choices: ["Intern", "Engineer", "Manager"],
            name: "roleAns"
        }
    ];

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

    const internType =
        {
            type: "prompt",
            message: "What is the Intern's school?",
            name: "schoolAns"
        };

    const engineerType =
        {
            type: "prompt",
            message: "What is the Engineer's GitHub?",
            name: "githubAns"
        };

    const managerType = 
        {
            type: "prompt",
            message: "What is the Manager's office number?",
            name: "officeAns"
        };

    const continueQuest =
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"],
            name: "empAns"
        };

        
    const questionBuild = [...genQuest];

    if(buildType === "Init"){
        return (empType);
    }
    else if (buildType === "Intern"){
        questionBuild.push(internType);
    }
    else if (buildType === "Engineer"){
        questionBuild.push(engineerType);
    }
    else{
        questionBuild.push(managerType);
    }

    questionBuild.push(continueQuest);
    return (questionBuild);
}

module.exports = {
    questionBuilder : questionBuilder
};