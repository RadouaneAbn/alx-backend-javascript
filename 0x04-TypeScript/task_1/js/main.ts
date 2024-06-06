interface Teacher {
    readonly firstName : string;
    readonly lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'teacher',
  fullTimeEmployee: false,
  lastName: 'one',
  location: 'London',
  contract: false,
};

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClassImpl implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }

}
// Create an instance of StudentClass
const student: StudentClass = new StudentClassImpl('Radouane', 'Abn');
console.log(student.displayName());
console.log(student.workOnHomework());

console.log(printTeacher("Teacher", "Two"));
