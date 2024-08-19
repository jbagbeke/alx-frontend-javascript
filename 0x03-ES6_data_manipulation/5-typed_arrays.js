export default function createInt8TypedArray (length, position, value) {
  if (position < 0 || position >= length || value < -127 || value > 127) {
    throw new Error('Position outside range')
  }

  const buffer = new ArrayBuffer(length)
  const dataview = new DataView(buffer)

  dataview.setInt8(position, value)
  return dataview
}
