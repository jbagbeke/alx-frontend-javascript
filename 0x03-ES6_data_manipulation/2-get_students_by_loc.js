export default function getStudentsByLocation(stds, city) {
  return stds.filter(elem => elem.location === city)
}
