// This is a JavaScript function named 'handleResponseFromAPI'.
// It takes a Promise 'promise' as an argument and performs certain actions based on its outcome.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function handleResponseFromAPI(promise) {
    // Use the '.then' method to specify a callback function that runs when the Promise is resolved.
    // In this case, it always returns a successful response object.
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      // Use the '.catch' method to specify a callback function that runs when the Promise is rejected.
      // In this case, it returns an empty error object.
      .catch(() => Error())
      // Use the '.finally' method to specify a callback function that runs regardless of whether the Promise is resolved or rejected.
      .finally(() => console.log('Got a response from the API'));
  }
  