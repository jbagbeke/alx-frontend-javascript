export default function cleanSet (set, startString) {
  if (typeof startString !== 'string' || !startString) return ''

  const [clean, sLen] = [[], startString.length]

  set.forEach(x => {
    x = x.trim()
    if (x.startsWith(startString)) clean.push(x.slice(sLen).trim())
  })
  return clean.join('-')
}
