export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    return 0;
  }
  return studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
