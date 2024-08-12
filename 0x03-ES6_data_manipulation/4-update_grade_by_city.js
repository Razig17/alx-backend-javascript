export default function updateStudentGradeByCity(list, city, newGrade) {
  const students = list.filter(((student) => student.location === city));
  const grades = students.map((student) => {
    const gradesFound = newGrade.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradesFound ? gradesFound.grade : 'N/A' };
  });
  return grades;
}
