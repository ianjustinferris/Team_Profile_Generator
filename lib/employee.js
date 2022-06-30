class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //Adding method getName() to Employee class
    getName() {
        return this.name;
    }

    //Adding method getId() to Employee class
    getId() {
        return this.id;
    }

    //Adding method getEmail() to Employee class
    getEmail() {
        return this.email;
    }

    //Adding method getRole() to Employee class
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


