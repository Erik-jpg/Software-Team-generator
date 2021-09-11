const Engineer = require('../Utilities/Engineer');

test('Engineer receives a name', () => {
    const engineer = new Engineer('Scotty', '43110', 'beamMeUp@example.com', 'Engineer', 'www.github.com');
    expect(engineer.getName()).toBe('Scotty');
});

test('Engineer receives an id', () => {
    const engineer = new Engineer('Scotty', '43110', 'beamMeUp@example.com', 'Engineer', 'www.github.com');
    expect(engineer.getId()).toBe('43110');
});

test('Engineer receives an email', () => {
    const engineer = new Engineer('Scotty', '43110', 'beamMeUp@example.com', 'Engineer', 'www.github.com');
    expect(engineer.getEmail()).toBe('beamMeUp@example.com');
});

test('Engineer receives a role', () => {
    const engineer = new Engineer('Scotty', '43110', 'beamMeUp@example.com', 'Engineer', 'www.github.com');
    expect(engineer.getRole()).toBe('Engineer');
});

test('Engineer receives a github account', () => {
    const engineer = new Engineer('Scotty', '43110', 'beamMeUp@example.com', 'Engineer', 'www.github.com');
    console.log(engineer)
    expect(engineer.getGithub()).toBe('www.github.com');
});