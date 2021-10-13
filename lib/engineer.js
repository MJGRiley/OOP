const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email)
        this.github = `https://github.com/${github}`
    }
    
    getGithub() {
        return this.github
    }
    
    getRole() {
        return 'Engineer'
    }
}

function engineerHTMLify(engineer) {

}

module.exports = {Engineer,engineerHTMLify}