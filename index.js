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
        name: "managerName",
        message: "Please enter the Manager's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a name for the manager'
            } return true
        }
    },

    {
        type: 'input',
        name: "managerId",
        message: "Please enter the Manager's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the manager'
            } return true
        }
    },

    {
        type: 'input',
        name: "managerEmail",
        message: "Please enter the Manager's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the manager'
            } return true
        }
    },

    {
        type: 'input',
        name: "managerOffice",
        message: "Please enter the Manager's office number.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid office number for the manager'
            } return true
        }
    },

]

//Array of Engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: "engineerName",
        message: "Please enter the Engineer's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid name for the engineer.'
            } return true
        }
    },

    {
        type: 'input',
        name: "engineerId",
        message: "Please enter the Engineer's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the engineer.'
            } return true
        }
    },

    {
        type: 'input',
        name: "engineerEmail",
        message: "Please enter the Engineer's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the engineer.'
            } return true
        }
    },

    {
        type: 'input',
        name: "engineerGithub",
        message: "Please enter the Engineer's github.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid github for the engineer.'
            } return true
        }
    },
]

//Array of Intern questions
const internQuestions = [
    {
        type: 'input',
        name: "internName",
        message: "Please enter the Intern's name.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid name for the intern.'
            } return true
        }
    },

    {
        type: 'input',
        name: "internId",
        message: "Please enter the Intern's ID.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid ID for the intern.'
            } return true
        }
    },

    {
        type: 'input',
        name: "internEmail",
        message: "Please enter the Intern's email.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid email for the intern.'
            } return true
        }
    },

    {
        type: 'input',
        name: "internSchool",
        message: "Please enter the Intern's school.",
        validate: (answer) => {
            if (answer == '') {
                return 'Please enter a valid school for the intern.'
            } return true
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
            console.log(teamMembers.manager)
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
                answers.engineerGithub
            );
            teamMembers.engineers.push(engineer);
            console.log(teamMembers.engineers)
            teamProfileGenerator();
        });
}


//Function to get Intern info
function getInternInfo() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            teamMembers.interns.push(intern);
            console.log(teamMembers.interns)
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
                    buildHTML();
            }
        });
}

//Function to write file to dist folder calling buildPage() to render html 
function buildHTML() {
    fs.writeFile("dist/myTeam.html", buildPage(teamMembers), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

//Invoke app 
getManagerInfo();