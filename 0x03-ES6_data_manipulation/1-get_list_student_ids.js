export default function getListStudentIds (objArr) {
  return objArr instanceof Array ? objArr.map(elem => elem.id) : []
}
