export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

const subject: Subjects.Subject = new Subjects.Subject()
export const cTeacher: Subjects.Teacher = {
    firstName: 'Joshua',
    lastName: 'Mensah',
    experienceTeachingC: 10,
}
subject.setTeacher = cTeacher;

console.log('C++')
cpp.setTeacher = cTeacher
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('Java')
java.setTeacher = cTeacher
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

console.log('React')
react.setTeacher = cTeacher
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())




