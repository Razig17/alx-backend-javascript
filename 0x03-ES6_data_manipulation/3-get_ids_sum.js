export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, student) => accumulator + student.id, 0);
}
