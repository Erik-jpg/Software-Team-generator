const Engineer = require('../Utilities/Engineer');

test('Engineer receives a name', () => {
    const Engineer = new Engineer({name:'Scotty', id:'43110', email:'beamMeUp@example.com', role:'Engineer', github:'www.github.com'});
    expect(Engineer.getName()).toBe('Scotty');
});

test('Engineer receives an id', () => {
    const Engineer = new Engineer({name:'Scotty', id:'43110', email:'beamMeUp@example.com', role:'Engineer', github:'www.github.com'});
    expect(Engineer.getId()).toBe('43110');
});

test('Engineer receives an email', () => {
    const Engineer = new Engineer({name:'Scotty', id:'43110', email:'beamMeUp@example.com', role:'Engineer', github:'www.github.com'});
    expect(Engineer.getEmail()).toBe('beamMeUp@example.com');
});

test('Engineer receives a role', () => {
    const Engineer = new Engineer({name:'Scotty', id:'43110', email:'beamMeUp@example.com', role:'Engineer', github:'www.github.com'});
    expect(Engineer.getRole()).toBe('Engineer');
});

test('Engineer receives a github account', () => {
    const Engineer = new Engineer({name:'Scotty', id:'43110', email:'beamMeUp@example.com', role:'Engineer', github:'www.github.com'});
    expect(Engineer.getGithub()).toBe('www.github.com');
});