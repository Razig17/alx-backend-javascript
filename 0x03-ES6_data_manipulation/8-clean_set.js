export default function cleanSet(set, startString) {
  let str = '';
  for (const item of set) {
    if (item.startsWith(startString) && startString.length > 0) {
      str = `${str + item.slice(startString.length)}-`;
    }
  }
  return str.slice(0, -1);
}
