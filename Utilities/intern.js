const Employee = require('./Employee')
class Intern extends Employee {
    constructor({ name, id, email, role, school }) {
        super({ name, id, email, role});
        this.school = school;
    }
    getSchool() {return this.school;}

    generateInternStats() {
        return `
    <div class="card" id="intern">
    <div class="card-body">
    <h2 class="cardTitle">${this.role}<open book emoji></h2>
    <ul>
    <li class="Intern info">Name: ${this.name}</li>
    <li class="Intern info">Role: ${this.role}</li>
    <li class="Intern info">I.D.: ${this.id}</li>
    <li class="Intern info">E-mail: ${this.email}</li>
    <li class="Intern info">School: ${this.school}</li>
    </ul>
    </div>
    </<div>`;
    }
}

module.exports = Intern;