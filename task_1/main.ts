interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature for extra attributes
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

console.log(teacher3);

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

console.log(printTeacher("John", "Doe")); // Output: J. Doe

const teacherPrinter: printTeacherFunction = printTeacher;
console.log(teacherPrinter("Jane", "Smith")); // Output: J. Smith

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


