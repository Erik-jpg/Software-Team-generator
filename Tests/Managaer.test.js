const Manager = require('../Utilities/Manager');

test('Manager receives a name', () => {
    const Manager = new Manager({name:'Yimir', id:'8', email:'email@example.com', role:'Manager', officeNumber:'5'});
    expect(Manager.getName()).toBe('Yimir');
});

test('Manager receives an id', () => {
    const Manager = new Manager({name:'Yimir', id:'8', email:'email@example.com', role:'Manager', officeNumber:'5'});
    expect(Manager.getId()).toBe('8');
});

test('Manager receives an email', () => {
    const Manager = new Manager({name:'Yimir', id:'8', email:'email@example.com', role:'Manager', officeNumber:'5'});
    expect(Manager.getEmail()).toBe('email@example.com');
});

test('Manager receives a role', () => {
    const Manager = new Manager({name:'Yimir', id:'8', email:'email@example.com', role:'Manager', officeNumber:'5'});
    expect(Manager.getRole()).toBe('Manager');
});

test('Manager receives an officeNumber', () => {
    const Manager = new Manager({name:'Yimir', id:'8', email:'email@example.com', role:'Manager', officeNumber:'5'});
    expect(Manager.getOfficeNumber()).toBe('5');
});