const Intern = require('../Utilities/Intern');

test('Intern receives a name', () => {
    const Intern = new Intern({name:'Johnny', id:'1007', email:'IAmTheChange@example.com', role:'Intern', school:'FutureOfTheIndustry'});
    expect(Intern.getName()).toBe('Johnny');
});

test('Intern receives an id', () => {
    const Intern = new Intern({name:'Johnny', id:'1007', email:'IAmTheChange@example.com', role:'Intern', school:'FutureOfTheIndustry'});
    expect(Intern.getId()).toBe('1007');
});

test('Intern receives an email', () => {
    const Intern = new Intern({name:'Johnny', id:'1007', email:'IAmTheChange@example.com', role:'Intern', school:'FutureOfTheIndustry'});
    expect(Intern.getEmail()).toBe('IAmTheChange@example.com');
});

test('Intern receives an role', () => {
    const Intern = new Intern({name:'Johnny', id:'1007', email:'IAmTheChange@example.com', role:'Intern', school:'FutureOfTheIndustry'});
    expect(Intern.getRole()).toBe('Intern');
});

test('Intern receives a school', () => {
    const Intern = new Intern({name:'Johnny', id:'1007', email:'IAmTheChange@example.com', role:'Intern', school:'FutureOfTheIndustry'});
    expect(Intern.getSchool()).toBe('FutureOfTheIndustry');
});