import { uploadPhoto, createUser } from './utils.js'

export default async function asyncUploadUser() {
    return Promise.all([uploadPhoto(), createUser()]).then((values) => {
        return {
            photo: values[0],
            user: values[1]
        }
    }).catch((error) => {
        return {
            photo: null,
            user: null
        }
    })
}