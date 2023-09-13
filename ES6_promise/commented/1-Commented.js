// This is a JavaScript function named 'getResponseFromAPI'.
// It is intended to simulate an API request using a Promise.
// The 'success' parameter determines whether the simulation should succeed or fail.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function getResponseFromAPI(success) {
    // Create a new Promise object.
    // The Promise constructor takes a single argument, which is a function.
    // This function is sometimes called the "executor function."
    // It receives two arguments: 'resolve' and 'reject'.
    // 'resolve' is a function to be called when the promise is fulfilled (successfully resolved).
    // 'reject' is a function to be called when the promise is rejected (an error occurs).
    return new Promise((resolve, reject) => {
      // Check the 'success' parameter to determine whether the simulation should succeed or fail.
      if (success) {
        // If 'success' is true, simulate a successful API response.
        // Resolve the promise with a successful response object.
        resolve({ status: 200, body: 'Success' });
      } else {
        // If 'success' is false, simulate a failed API response.
        // Reject the promise with an error message.
        reject(Error('The fake API is not working currently'));
      }
    });
  }
  