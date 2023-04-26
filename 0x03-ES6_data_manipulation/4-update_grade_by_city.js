export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const cityStudents = studentsList.filter((student) => student.location === city);
  const gradedStudents = cityStudents.map((student) => student['grade'] = );
}
