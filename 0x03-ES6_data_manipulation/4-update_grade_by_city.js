export default function updateStudentGradeByCity (stds, city, newGrades) {
  return stds
    .filter(elem => elem.location === city)
    .map(elem => {
      elem.grade = 'N/A'

      for (let [i, v] of Object.entries(newGrades)) {
        if (elem.id === v.studentId && elem.grade === 'N/A') {
          elem.grade = v.grade
          break
        }
      }

      return elem
    })
}
