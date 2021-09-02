const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor(managerArr, engineerArr, internsArr){
        this.managerArr = [];
        this.engineerArr = [];
        this.internsArr = [];
    }
    startTeam() {
        const teamEntries = async() => {
            const managerEntries = await this.promptForManager();
            this.managerArr = new Manager(managerEntries);
            this.buildCards();
        }
        teamEntries();
    }

    async promptForManager(){
    const managerAnswers = await this.inquirer.prompt([
        {
            type: 'input',
            name:'managerName',
            message: 'What is the name of the Manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the I.D. number of this Manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Email of this Manager?'
        }, 
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the Office Number of this Manager?'
        },
    ]);
    managerAnswers.role = 'Manager';
    return managerAnswers; 
    }

    buildEmployees() {
     const promptForEngineer = async() =>{
         const engineerAnswers = await this.inquirer.prompt([
             {
                 type: 'input',
                 name: 'engineerName',
                 message: 'What is the name of this Engineer?'
             },
             {
                 type: 'input',
                 name: 'engineerId',
                 message: 'What is the I.D. of this Engineer?'
             },
             {
                 type: 'input',
                 name: 'engineerEmail',
                 message: 'What is the Email of this Engineer?'
             },
             {
                 type: 'input',
                 name: 'engineerGithub',
                 message: 'What is the Username of this Engineer on Github?'
             },
             {
                 type: 'confirm',
                 name: 'addAnotherEngineer',
                 message: 'Would you like to add another Engineer?'
             }
         ]);
         engineerAnswers.role = 'Engineer';
         this.engineerArr.push(new Engineer(engineerAnswers));
         if(engineerAnswers.addAnotherEngineer) return promptForEngineer();
         this.buildCards();
     };

     const promptForIntern = async() => {
         const internAnswers = await this.inquirer.prompt([
             {
                 type: 'input',
                 name: 'internName',
                 message: 'What is the name of this Intern?'
             },
             {
                 type: 'input',
                 name: 'internId',
                 message: 'What is the I.D. of this Intern?'
             },
             {
                 type: 'input',
                 name: 'internEmail',
                 message: 'What is the Email of this Intern?'
             },
             {
                 type: 'input',
                 name: 'internSchool',
                 message: 'What is the School that this Intern attends?'
             },
             {
                type: 'confirm',
                name: 'addAnotherIntern',
                message: 'Would you like to add another Intern?'
            }
         ]);
         internAnswers.role = 'Intern';
         this.internsArr.push(new Intern(internAnswers));
         if(internAnswers.addAnotherIntern) return promptForIntern();
         buildCards();
     };

    }
}


console.log('working so far');
