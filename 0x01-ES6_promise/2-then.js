export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Promise.reject(new Error('')))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
