const Intern = require('../Utilities/Intern');

test('Intern receives a name', () => {
    const intern = new Intern('Johnny','1007', 'IAmTheChange@example.com', 'Intern', 'FutureOfTheIndustry');
    expect(intern.getName()).toBe('Johnny');
});

test('Intern receives an id', () => {
    const intern = new Intern('Johnny','1007', 'IAmTheChange@example.com', 'Intern', 'FutureOfTheIndustry');
    expect(intern.getId()).toBe('1007');
});

test('Intern receives an email', () => {
    const intern = new Intern('Johnny','1007', 'IAmTheChange@example.com', 'Intern', 'FutureOfTheIndustry');
    expect(intern.getEmail()).toBe('IAmTheChange@example.com');
});

test('Intern receives an role', () => {
    const intern = new Intern('Johnny','1007', 'IAmTheChange@example.com', 'Intern', 'FutureOfTheIndustry');
    expect(intern.getRole()).toBe('Intern');
});

test('Intern receives a school', () => {
    const intern = new Intern('Johnny','1007', 'IAmTheChange@example.com', 'Intern', 'FutureOfTheIndustry');
    console.log(intern)
    expect(intern.getSchool()).toBe('FutureOfTheIndustry');
});