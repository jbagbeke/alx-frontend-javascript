export const weakMap = new WeakMap()

export function queryAPI (endpoint) {
  function track_calls () {
    if (weakMap.has(endpoint)) {
      const endVal = weakMap.get(endpoint) + 1
      weakMap.set(endpoint, endVal)

      if (endVal >= 5) {
        throw new Error('Endpoint load is high')
      }
    } else {
      weakMap.set(endpoint, 1)
    }
  }

  track_calls()
}
