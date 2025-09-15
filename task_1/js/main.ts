interface teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
}

const teacher1: teacher = {
    firstName: "John",
    lastName: "Smit",
    fullTimeEmployee: true,
    location: "Lagos",
    contract: true
};

console.log(teacher1);