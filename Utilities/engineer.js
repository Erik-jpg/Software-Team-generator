const Employee = require('./Employee');
class Engineer extends Employee {
    //Some people use object brackets in the constructor and super, might need later.
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github;
    }

    getGithub() {
        return this.github
    }


    generateEngineerStats() {
        return `
    <div class="card" id="engineer">
    <div class="card-body">
    <h2 class="cardTitle">${this.role}<cup of coffee emoji></h2>
    <ul>
    <li class="Engineer info">Name: ${this.name}</li>
    <li class="Engineer info">Role: ${this.role}</li>
    <li class="Engineer info">I.D.: ${this.id}</li>
    <li class="Engineer info">E-mail: ${this.email}</li>
    <li class="Engineer info">Github: ${this.github}</li>
    </ul>
    </div>
    </<div>`;
    }
}

module.exports = Engineer;