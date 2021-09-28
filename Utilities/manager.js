const Employee = require('./Employee');
class Manager extends Employee {
    constructor({ name, id, email, role, officeNumber }) {
        super({ name, id, email, role });
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {return this.officeNumber;}

    generateManagerStats() {
        return `
    <div class="card" id="manager">
    <div class="card-body">
    <h2 class="cardTitle">${this.role}<paper work emoji></h2>
    <ul>
    <li class="Manager info">Name: ${this.name}</li>
    <li class="Manager info">Role: ${this.role}</li>
    <li class="Manager info">I.D.: ${this.id}</li>
    <li class="Manager info">E-mail: ${this.email}</li>
    <li class="Manager info">Office Number: ${this.officeNumber}</li>
    </ul>
    </div>
    </<div>`;
    }
}


module.exports = Manager;