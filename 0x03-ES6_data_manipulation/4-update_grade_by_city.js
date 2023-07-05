export default function updateStudentGradeByCity(students, city, newGrades) {
  const selStud = students.filter((student) => student.location === city);
  const Stud = selStud.map((student) => {
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade; // eslint-disable-line no-param-reassign
      }
    }
    if ('grade' in student === false) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });

  return Stud;
}
