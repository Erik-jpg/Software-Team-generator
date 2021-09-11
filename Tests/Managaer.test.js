const Manager = require('../Utilities/Manager');

test('Manager receives a name', () => {
    const manager = new Manager('Yimir', '8', 'email@example.com', 'Manager', '5');
    expect(manager.getName()).toBe('Yimir');
});

test('Manager receives an id', () => {
    const manager = new Manager('Yimir', '8', 'email@example.com', 'Manager', '5');
    expect(manager.getId()).toBe('8');
});

test('Manager receives an email', () => {
    const manager = new Manager('Yimir', '8', 'email@example.com', 'Manager', '5');
    expect(manager.getEmail()).toBe('email@example.com');
});

test('Manager receives a role', () => {
    const manager = new Manager('Yimir', '8', 'email@example.com', 'Manager', '5');
    expect(manager.getRole()).toBe('Manager');
});

test('Manager receives an officeNumber', () => {
    const manager = new Manager('Yimir', '8', 'email@example.com', 'Manager', '5');
    console.log(manager)
    expect(manager.getOfficeNumber()).toBe('5');
});