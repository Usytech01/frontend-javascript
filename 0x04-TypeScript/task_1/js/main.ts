

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (must be a function declaration, not arrow)
function printTeacher(firstName: string, lastName: string): string {
  const teacher = { firstName, lastName }; // <-- this gives us { firstName, lastName }
  return `${firstName}. ${lastName}`;
}

// StudentClass implementation
class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.lastName + this.firstName; // Corrected to return lastName + firstName
  }
}

// Example usage:
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: true, // extra attribute allowed
};

// teacher1.firstName = "Mike"; // ❌ Error: cannot reassign because it's readonly

console.log(teacher1);

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1)