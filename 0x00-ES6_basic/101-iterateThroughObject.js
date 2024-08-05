export default function iterateThroughObject(reportWithIterator) {
  let all = '';
  for (const emp of reportWithIterator) {
    if (all === '') {
      all = emp;
    } else {
      all += ` | ${emp}`;
    }
  }
  return all;
}
