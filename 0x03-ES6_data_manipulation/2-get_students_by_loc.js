export default function getStudentsByLocation(studentsList, city) {
  const matchedCity = studentsList.filter((student) => student.location === city);
  return matchedCity;
}
