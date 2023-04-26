export default function getStudentIdsSum(studentsList) {
  const idSum = studentsList.reduce((a, b) => a + b.id, 0);
  return idSum;
}
