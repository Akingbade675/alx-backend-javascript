export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  const ids = studentsList.map((student) => student.id);
  return ids;
}
