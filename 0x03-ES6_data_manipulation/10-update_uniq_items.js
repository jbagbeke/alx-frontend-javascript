export default function updateUniqueItems (map) {
  if (!map || !(map instanceof Map)) {
    throw new Error('Cannot process')
  }

  for (let [k, v] of map.entries()) {
    if (v === 1) {
      map.set(k, 100)
    }
  }

  return map
}
