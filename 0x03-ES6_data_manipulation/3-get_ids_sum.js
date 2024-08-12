export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, student) => accumulator + student.id, 0);
}

const sum = getStudentIdsSum([{ id: 1, firstName: 'Guillaume', location: 'San Francisco' }, { id: 2, firstName: 'James', location: 'Columbia' }, { id: 5, firstName: 'Serena', location: 'San Francisco' }]);
console.log(sum);
