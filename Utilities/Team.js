const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team {
  constructor(managerArr, engineerArr, internsArr) {
    this.managerArr = [];
    this.engineerArr = [];
    this.internsArr = [];
  }
  startTeam() {
    const teamEntries = async () => {
      const managerEntries = await this.promptForManager();
      this.managerArr = new Manager(managerEntries);
      this.buildPage();
    };
    teamEntries();
  }

  async promptForManager() {
    const managerAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the Manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the I.D. number of this Manager?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Email of this Manager?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the Office Number of this Manager?",
      },
      {
          type: 'confirm',
          name: 'done',
          message: 'Would you like to add more employees?'
      },
    ]);
    managerAnswers.role = "Manager";
    this.managerArr.push(new Manager(managerAnswers));
    if(managerAnswers.another) return buildEmployees();
    this.buildPage();
  }

  buildEmployees() {
    const promptForEngineer = async () => {
      const engineerAnswers = await this.inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of this Engineer?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the I.D. of this Engineer?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Email of this Engineer?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Username of this Engineer on Github?",
        },
        {
          type: "confirm",
          name: "addAnotherEngineer",
          message: "Would you like to add another Engineer?",
        },
      ]);
      engineerAnswers.role = "Engineer";
      this.engineerArr.push(new Engineer(engineerAnswers));
      if (engineerAnswers.addAnotherEngineer) return promptForEngineer();
      this.buildPage();
    };

    const promptForIntern = async () => {
      const internAnswers = await this.inquirer.prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of this Intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the I.D. of this Intern?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Email of this Intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the School that this Intern attends?",
        },
        {
          type: "confirm",
          name: "addAnotherIntern",
          message: "Would you like to add another Intern?",
        },
      ]);
      internAnswers.role = "Intern";
      this.internsArr.push(new Intern(internAnswers));
      if (internAnswers.addAnotherIntern) return promptForIntern();
      buildPage();
    };
  }
  //need to write
  buildPage() {
    const headOfPage = fs.readFileSync(
      "./htmlPage/headOfPage.txt",
      "utf8",
      (err) => {
        throw new Error(err);
      }
    );
    const footOfPage = fs.readFileSync(
      "./htmlPage/footOfPage.txt",
      "utf8",
      (err) => {
        throw new Error(err);
      }
    );
    const styleOfPage = fs.readFileSync(
      "./htmlPage/styleOfPage.css",
      "utf8",
      (err) => {
        throw new Error(err);
      }
    );

    const managerStats = this.managerArr.generateManagerStats();
    const engineerStats = this.engineerArr.map((Engineer) => {
      return Engineer.generateEngineerStats() + "\n";
    });
    const internStats = this.internsArr.map((Intern) => {
      return Intern.generateInternStats() + "\n";
    });

    const pageLayout = `${headOfPage}\n
    ${managerStats}\n
    ${engineerStats.join("\n")}\n
    ${internStats.join("\n")}\
    ${footOfPage}\n`;

    fs.writeFileSync(
      "./newTeam/new-software-team.html",
      pageLayout,
      "utf8",
      (err) => {
        throw new Error(err);
      }
    );
    fs.writeFileSync(
      "./newTeam/new-software-team.html",
      styleOfPage,
      "utf8",
      (err) => {
        throw new Error(err);
      }
    );
  }
}

module.exports = Team;
