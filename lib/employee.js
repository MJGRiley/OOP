class Employee { //creates the initial class
    constructor(name,id,email){
        this.name = name //saves properties to the object
        this.id = id
        this.email = email
    }

    getName() { //returns properties
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }

}

module.exports = Employee