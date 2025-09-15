interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
    Teacher: any;
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Smit",
    fullTimeEmployee: true,
    location: "Lagos",
    contract: true,
    yearsOfExperience: 0,
    Teacher: undefined
};

console.log(teacher);


interface Directors{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    numberOfReports:number;
    location: string;
    contract: boolean;
    Teacher: any;

}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    contract: false,
    Teacher: undefined
};
console.log(director1);
