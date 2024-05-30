export default async function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  try {
    await promise;
    return { status: 200, body: 'success' };
  } catch (err) {
    return Error();
  }
}
