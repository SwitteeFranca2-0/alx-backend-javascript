export default function getListStudentIds(students) {
  if (Array.isArray(students) === false) {
    return [];
  }
  const ids = students.map((student) => student.id);
  return ids;
}
