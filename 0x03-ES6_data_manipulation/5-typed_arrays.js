export default function createInt8TypedArray(length, postion, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (postion < 0 || postion > length - 1) {
    throw Error('Position outside the range');
  }
  int8[postion] = value;
  return new DataView(buffer);
}
