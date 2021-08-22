const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const managerData = require('./helperUtilities/employeeEntry/managerData');
const engineerData = require('../helperUtilities/employeeEntry/engineerData');
const inturnData = require('../helperUtilities/employeeEntry/inturnData');
const generateEmployees = require('../helperUtilities/generateEmployees');
const createHTML = require('../helperUtilities/employeeEntry/createHTML');



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
    writingEmployees(htmlCreator(managerData, engineerData, inturnData));
}

initialize();