export default function hasValuesFromArray (set, arr) {
  let has = true

  arr.forEach(x => {
    if (!set.has(x)) has = false
  })
  return has
}
