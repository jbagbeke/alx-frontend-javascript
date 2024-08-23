export default function cleanSet (set, startString) {
  if (typeof startString !== 'string' || !startString) return ''

  const [clean, sLen] = [[], startString.length]

  for (let x of set) {
    x = x.trim()
    if (x.startsWith(startString)) {
        clean.push(x.slice(sLen))
    }
  }
  return clean.join('-')
}
