interface Teachers {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any,    
}
const teacher3: Teachers = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);


interface Directors extends Teachers {
    numberOfReports: number,   
}
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);


interface printTeacherFunction {
    (firstName: string, lastName: string): string,
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string  => {
    return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher('Joshua', 'Bubune'));


interface Student {
    workOnHomework(): string,
    displayName(): string,
}


class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'working from home'
    }

    getToWork(): string {
        return this.getCoffeeBreak()
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}


class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}


function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director()
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: any): employee is Director {
    return 'getToWork' in employee;
}


function executeWork(employee: any): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks())
    } else {
        console.log(employee.workTeacherTasks())
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
    console.log(`Teaching ${todayClass}`)
    return `Teaching ${todayClass}`
}

teachClass('Math');
teachClass('History');
