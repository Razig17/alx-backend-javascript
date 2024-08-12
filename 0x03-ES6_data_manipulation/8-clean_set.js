export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const str = [];
  set.forEach((item) => {
    if (item !== undefined && item.startsWith(startString)) {
      const newItem item.slice(startString.length);
      str.push(newItem);
    }
  });
  return str.join('-');
}
