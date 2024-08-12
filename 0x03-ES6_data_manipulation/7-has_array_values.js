export default function hasArrayValues(set, list) {
  return list.every((value) => set.has(value));
}
