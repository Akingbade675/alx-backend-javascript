/* eslint-disable no-unused-vars */
function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }), () => new Error());
  console.log('Got a response from the API');
}
