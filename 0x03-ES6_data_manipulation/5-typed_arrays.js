export default function constInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  new DataView(buffer).setInt8(position, value);
  return new DataView(buffer);
}
