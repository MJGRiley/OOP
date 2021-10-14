const Employee = require('../lib/Employee')

describe('Employee', () => {
    test('testing to make sure name is saved correctly',() =>{
        let example = new Employee('John',342,'me@here.com')
        expect(example.getName()).toBe('John')
    })
    test('id is saved correctly',() =>{
        let example = new Employee('John',342,'me@here.com')
        expect(example.getID()).toBe(342)
    })
    test('email is saved correctly',() =>{
        let example = new Employee('John',342,'me@here.com')
        expect(example.getEmail()).toBe('me@here.com')
    })
    test('Role is saved correctly',() =>{
        let example = new Employee('John',342,'me@here.com')
        expect(example.getRole()).toBe('Employee')
    })
    test('', () =>{
        let example = new Employee('John',342,'me@here.com')
        expect(typeof(example)).toBe('object')
    })
})