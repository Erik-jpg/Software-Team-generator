class Team {
    constructor(){
        manager = [];
        engineers = [];
        interns = [];
    };
    promptForManager(){

    }
}

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's id number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email address?",
    },
    {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

inquirer.then((answers) => {
    if (answers.role === "Manager") {
        const Manager = new Manger(`${this.name} ${this.id} ${this.email} ${this.role} ${this.officeNumber}`);
        managerData.push(Manager);
    }
    if (answers.role === "Engineer") {
        const Engineer = new Engineer(`${this.name} ${this.id} ${this.email} ${this.role} ${this.github}`);
        engineerData.push(Engineer);
    }
    if (answers.role === "Intern") {
        const Intern = new Intern(`${this.name} ${this.id} ${this.email} ${this.role} ${this.school}`);
        internData.push(Intern);
    }
    {
        if (answers === "addToTeam") {
            generateEmployees();
        }
        else {
            team.forEach((team) => {
                console.log(team);
            });
        }
        
}
})



generateEmployees();
console.log('working so far');
