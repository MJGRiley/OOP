const Intern = require('../lib/Intern')

describe('Intern', () => {
    test('testing to make sure name is saved correctly',() =>{
        let example = new Intern('John',342,'me@here.com','UofA')
        expect(example.getName()).toBe('John')
    })
    test('id is saved correctly',() =>{
        let example = new Intern('John',342,'me@here.com','UofA')
        expect(example.getID()).toBe(342)
    })
    test('email is saved correctly',() =>{
        let example = new Intern('John',342,'me@here.com','UofA')
        expect(example.getEmail()).toBe('me@here.com')
    })
    test('Role is saved correctly',() =>{
        let example = new Intern('John',342,'me@here.com','UofA')
        expect(example.getSchool()).toBe('UofA')
    })
    test('', () =>{
        let example = new Intern('John',342,'me@here.com','UofA')
        expect(typeof(example)).toBe('object')
    })
})