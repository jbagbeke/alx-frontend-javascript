export default function cleanSet (set, startString) {
  if (typeof startString !== 'string' || !startString) return ''

  const [clean, sLen] = [[], startString.length]

  set.forEach(x => {
    if (x && x.startsWith(startString)) clean.push(x.slice(sLen))
  })
  return clean.join('-')
}
