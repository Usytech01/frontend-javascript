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