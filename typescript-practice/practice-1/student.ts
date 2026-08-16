interface Student {
    name: string,
    marks: number[]
};

function averageMarks(student: Student): string {
    const [studentName, studentMarks] = Object.values(student);
    const averageMarks = studentMarks
    .reduce((acc: number, marks: number)=> acc+marks, 0) 
    / studentMarks.length;
    return `Average marks of ${studentName} is: ${averageMarks}`;
    
}

function averageMarkCount(student: Student): number {
    const [, studentMarks] = Object.values(student);
    const averageMarks = studentMarks
    .reduce((acc: number, marks: number)=> acc+marks, 0) 
    / studentMarks.length;
    return averageMarks;
    
}
function passedStudents(students: Student[]): Student[]{
    let passedStudents = [];

    for (let student of students) {
        const averageMarks = student.marks
        .reduce((acc: number, marks: number)=> acc+marks, 0) 
        / student.marks.length;
        
        if(averageMarks >= 40){
            passedStudents.push(student);
        }
    }

    return passedStudents;
}

function highestAverage(students: Student[]): Student {
    return students.reduce((acc, student)=> {
        if(averageMarkCount(student) > averageMarkCount(acc)) {
            return student;
        }
        return acc;
    }
    ,students[0]);
}

const students: Student[] = [
  {
    name: "Rahim",
    marks: [78, 85, 92, 74, 88]
  },
  {
    name: "Karim",
    marks: [45, 52, 39, 61, 48]
  },
  {
    name: "Nadia",
    marks: [91, 87, 95, 89, 93]
  },
  {
    name: "Sadia",
    marks: [32, 41, 38, 45, 36]
  },
  {
    name: "Tanvir",
    marks: [65, 72, 58, 81, 69]
  },
  {
    name: "Farhan",
    marks: [28, 35, 42, 31, 39]
  }
];
console.log(averageMarks(students[0]));
console.log(averageMarks(students[3]));
console.log("Passed students: ", passedStudents(students));
console.log(highestAverage(students));