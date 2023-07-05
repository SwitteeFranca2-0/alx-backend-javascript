export default function getStudentIdsSum(students) {
  const sumId = students.reduce((acccumulator, currentValue) => acccumulator
    + currentValue.id, 0);
  return sumId;
}
