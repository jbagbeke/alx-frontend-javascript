import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then((elements) => {
      const arr = []
      for (let elm of elements) {
        let obj = {}
        if (elm.status === 'rejected') {
          obj.value = `${elm.reason}`
        } else {
          obj.value = elm.value
        }
        obj.status = elm.status
        arr.push(obj)
    }
    return arr
  })
}
