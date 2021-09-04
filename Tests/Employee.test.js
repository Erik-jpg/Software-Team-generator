const Employee = require('../Utilities/Employee');

test('Employee receives a name', () => {
    const Employee = new Employee({name:'Yimir', id:'8', email:'email@example.com', role:'Manager'});
    expect(Employee.getName()).toBe('Yimir');
});

test('Employee receives an id', () => {
    const Employee = new Employee({name:'Yimir', id:'8', email:'email@example.com', role:'Manager'});
    expect(Employee.getId()).toBe('8');
});

test('Employee receives an email', () => {
    const Employee = new Employee({name:'Yimir', id:'8', email:'email@example.com', role:'Manager'});
    expect(Employee.getEmail()).toBe('email@example.com');
});

test('Employee receives a role', () => {
    const Employee = new Employee({name:'Yimir', id:'8', email:'email@example.com', role:'Manager'});
    expect(Employee.getRole()).toBe('Manager');
});