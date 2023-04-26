export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const cityStudents = studentsList.filter((student) => student.location === city);
  const gradedStudents = cityStudents.map((student) => {
    const copyStudent = { ...student };
    const grade = newGrades.find((grade) => grade.studentId === copyStudent.id);
    copyStudent.grade = grade ? grade.grade : 'N/A';
    return copyStudent;
  });
  return gradedStudents;
}
