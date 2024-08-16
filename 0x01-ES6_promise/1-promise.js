export default function getResponseFromAPI (success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'success'
    })
  }
  return new Promise.reject(new Error('The fake API is not working currently'))
}
