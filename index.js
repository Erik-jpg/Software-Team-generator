const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./Utilities/Manager');
const Engineer = require('../Utilities/Engineer');
const Intern = require('../Utilities/Intern');
const generateEmployees = require('../Utilities/Team');
const createHTML = require('../Utilities/htmlCreator');



function writingEmployees (fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('file written');
    }))
}

async function initialize() {
    await generateEmployees();
    writingEmployees(createHTML(managerData, engineerData, inturnData));
}

initialize();