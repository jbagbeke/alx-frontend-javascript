export default function createIteratorObject (report) {
  const dep_emps = Object.values(report.allEmployees).flat()
  return {
    [Symbol.iterator]: function* () {
      for (let x of dep_emps) {
        yield x
      }
    }
  }
}
