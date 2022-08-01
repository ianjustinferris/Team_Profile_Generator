const inquirer = require('inquirer');
const fs = require('fs');
const buildPage = require('./src/htmlBuild');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Object to store arrays of team members
const teamMembers = {
    manager: null,
    engineers: [],
    interns: []
};

//Array of Manager questions
const managerQuestions = [
    {
        type: 'input',
        name: "ManagerName",
        message: "Please enter the Manager's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a name for the manager'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "ManagerId",
        message: "Please enter the Manager's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the manager'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "ManagerEmail",
        message: "Please enter the Manager's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the manager'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "ManagerOffice",
        message: "Please enter the Manager's office number.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid office number for the manager'
            } else
                return true
        }
    },

]

//Array of Engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: "EngineerName",
        message: "Please enter the Engineer's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid name for the engineer.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "EngineerId",
        message: "Please enter the Engineer's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the engineer.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "EngineerEmail",
        message: "Please enter the Engineer's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the engineer.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "EngineerGithub",
        message: "Please enter the Engineer's github.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid github for the engineer.'
            } else
                return true
        }
    },
]

//Array of Intern questions
const internQuestions = [
    {
        type: 'input',
        name: "InternName",
        message: "Please enter the Intern's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid name for the intern.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "InternId",
        message: "Please enter the Intern's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the intern.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "InternEmail",
        message: "Please enter the Intern's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the intern.'
            } else
                return true
        }
    },

    {
        type: 'input',
        name: "InternSchool",
        message: "Please enter the Intern's school.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid school for the intern.'
            } else
                return true
        }
    },
]

//Function to collect Manager info 
function getManagerInfo() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
            );
            teamMembers.manager = manager;
            teamProfileGenerator()
        });
}


//Function to get Engineer info
function getEngineerInfo() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerOffice
            );
            teamMembers.engineers.push(engineer);
            teamProfileGenerator();
        });
}


//Function to get Intern info
function getInternInfo() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
            );
            teamMembers.interns.push(intern);
            teamProfileGenerator();
        });
}


//Main function
function teamProfileGenerator() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "Do you want to add an Engineer or Intern",
                choices: ["Engineer", "Intern", "I'm DONE!"],
            },
        ])
        .then((answers) => {
            switch (answers.choice) {
                case "Engineer":
                    getEngineerInfo();
                    break;
                case "Intern":
                    getInternInfo();
                    break;
                default:
                    buildTeam();
            }
        });
}

//Function to write file to dist folder calling buildPage() to render html 
function buildTeam() {
    fs.writeFile("dist/myTeam.html", buildPage(teamMembers), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

//Invoke app 
getManagerInfo();