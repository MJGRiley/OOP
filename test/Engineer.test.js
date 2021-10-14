const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    test('testing to make sure name is saved correctly',() =>{
        let example = new Engineer('John',342,'me@here.com','JohnDoe')
        expect(example.getName()).toBe('John')
    })
    test('id is saved correctly',() =>{
        let example = new Engineer('John',342,'me@here.com','JohnDoe')
        expect(example.getID()).toBe(342)
    })
    test('email is saved correctly',() =>{
        let example = new Engineer('John',342,'me@here.com','JohnDoe')
        expect(example.getEmail()).toBe('me@here.com')
    })
    test('Role is saved correctly',() =>{
        let example = new Engineer('John',342,'me@here.com','JohnDoe')
        expect(example.getGitHub()).toBe('https://github.com/JohnDoe')
    })
    test('', () =>{
        let example = new Engineer('John',342,'me@here.com','JohnDoe')
        expect(typeof(example)).toBe('object')
    })
})