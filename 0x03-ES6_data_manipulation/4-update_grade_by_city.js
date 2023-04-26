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


import getListStudents from "./0-get_list_students.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
