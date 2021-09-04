const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Utilities/Manager');
const Engineer = require('./Utilities/Engineer');
const Intern = require('./Utilities/Intern');
const Team = require('./Utilities/Team');
const htmlCreator = require('./Utilities/htmlCreator');

const team = new Team();
team.startTeam();