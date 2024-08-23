export default function cleanSet (set, startString) {
  if (startString.length < 1) return startString
  const [clean, sLen] = [[], startString.length]

  set.forEach(x => {
    if (x.startsWith(startString))
        clean.push(x.slice(sLen))
  });

  return clean.join('-')

}
