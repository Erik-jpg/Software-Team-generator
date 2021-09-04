const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateEmployees = require('./Team');

 createHTML =  async() => {
    const html = await generateEmployees(Employee, Manager, Engineer, Intern);
    startTeam();
    teamEntries();
    promptForManager();
    promptForEngineer();
    promptForIntern();
    buildEmployees();
}