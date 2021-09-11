const Employee = require('../Utilities/Employee');

test('Employee receives a name', () => {
    const employee = new Employee('Yimir', '8', 'email@example.com', 'Manager');
    expect(employee.getName()).toBe('Yimir');
});

test('Employee receives an id', () => {
    const employee = new Employee('Yimir', '8', 'email@example.com', 'Manager');
    expect(employee.getId()).toBe('8');
});

test('Employee receives an email', () => {
    const employee = new Employee('Yimir', '8', 'email@example.com', 'Manager');
    expect(employee.getEmail()).toBe('email@example.com');
});

test('Employee receives a role', () => {
    const employee = new Employee('Yimir', '8', 'email@example.com', 'Manager');
    expect(employee.getRole()).toBe('Manager');
});