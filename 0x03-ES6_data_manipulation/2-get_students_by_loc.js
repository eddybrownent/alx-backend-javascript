export default function getStudentsByLocation(students, city) {
  const filterList = students.filter((student) => student.location === city);
  return filterList;
}
