export default function cleanSet (set, startString) {
  const [clean, sLen] = [[], startString.length]

  set.forEach(x => {
    if (startString !== '' && x.startsWith(startString))
      clean.push(x.slice(sLen))
  })
  return clean.join('-')
}
