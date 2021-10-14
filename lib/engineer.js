const Employee = require('./Employee')//has to access the main constructor

class Engineer extends Employee { //extends the constructor Employee
    constructor(name,id,email,github) {
        super(name,id,email)//gets from Employee
        this.github = `https://github.com/${github}`//sets this URL to the github property
    }
    
    getGitHub() {
        return this.github
    }
    
    getRole() {
        return 'Engineer'
    }

}

module.exports = Engineer //exports the extension to be used in other js files