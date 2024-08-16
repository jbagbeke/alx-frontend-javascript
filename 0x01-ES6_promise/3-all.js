import { createUser, uploadPhoto } from './utils.js'

export default function handleProfileSignup () {
  return Promise.all([uploadPhoto(), createUser()])
    .then(values => {
      const [{ body }, { firstName, lastName }] = [values[0], values[1]]
      console.log(body, firstName, lastName)
    })
    .catch(err => console.log('Signup system offline'))
}
