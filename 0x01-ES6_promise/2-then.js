export default function handleResponseFromAPI (promise) {
  return promise
    .then(res => {
      console.log('Got a response from the API')
      return {
        status: 200,
        body: 'success'
      }
    })
    .catch(error => new Error())
}
