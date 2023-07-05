export default function getStudentsByLocation(students, location) {
  function studLocation(student) {
    return student.location === location;
  }

  const student = students.filter(studLocation);
  return student;
}
