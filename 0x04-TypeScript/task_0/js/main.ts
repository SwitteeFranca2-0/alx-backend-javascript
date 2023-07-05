export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "Frnaca",
    lastName: "john",
    age: 26,
    location: "Lagos",
};
const stud2: Student = {
    firstName: "Ryne",
    lastName: "Dinn",
    age: 23,
    location: "Lagos",
};

const studentsList: Student[] = [stud1, stud2];

