export default function getListStudentIds (objArr) {
  return typeof objArr === 'object' ? objArr.map(elem => elem.id) : []
}
