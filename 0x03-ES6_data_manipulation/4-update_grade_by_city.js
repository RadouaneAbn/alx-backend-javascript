export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const match = newGrades.find((info) => info.studentId === student.id);
      return { ...student, grade: match ? match.grade : 'N/A' };
    });
}
