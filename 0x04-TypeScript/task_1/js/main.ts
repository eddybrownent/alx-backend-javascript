interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

// Extending the Teacher class
  interface Directors extends Teacher {
    numberOfReports: number;
  }

// Write an interface for printTeacherFunction
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }

// a function Printing teachers
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  
    return `${firstLetter}. ${fullLastName}`;
  };
  

// Interface for the constructor of StudentClass
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }

// Interface for the methods of StudentClass
interface StudentClassMethods {
    workOnHomework(): string;
    displayName(): string;
  }


// Interface for the StudentClass combining constructor and methods
interface StudentClass extends StudentClassConstructor, StudentClassMethods {}

// Implementing the StudentClass
class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export default StudentClass;