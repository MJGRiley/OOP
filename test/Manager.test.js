const Manager = require('../lib/Manager')

describe('Manager', () => {
    test('testing to make sure name is saved correctly',() => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(example.getName()).toBe('John')
    })
    test('id is saved correctly',() => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(example.getID()).toBe(342)
    })
    test('email is saved correctly',() => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(example.getEmail()).toBe('me@here.com')
    })
    test('Role is saved correctly',() => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(example.getRole()).toBe('Manager')
    })
    test('Checking for Office Number',() => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(example.getOfficeNumber()).toBe(345)
    })
    test('', () => {
        let example = new Manager('John',342,'me@here.com',345)
        expect(typeof(example)).toBe('object')
    })
})