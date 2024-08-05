export default function appendToEachArrayValue(array, appendString) {
  const Array = [];
  for (const val of array) {
    Array.push(appendString + val);
  }

  return Array;
}
