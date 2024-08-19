export default function getListStudentIds (objArr) {
  const ids = []
  if (typeof objArr === 'object') {
    objArr.forEach(element => {
      ids.push(element.id)
    })
  }
  return ids
}
