export default function cleanSet (set, startString) {
  if (startString.length < 1) return startString

  return [...set]
    .filter(elem => elem.startsWith(startString))
    .map(elem => elem.replace(startString, ''))
    .join('-')
}
