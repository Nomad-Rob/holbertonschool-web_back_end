// This is a JavaScript function named 'handleProfileSignup'.
// It uses the 'Promise.all' method to concurrently execute two asynchronous functions, 'uploadPhoto' and 'createUser'.
// The function then processes the results or handles errors accordingly.

// Import the 'uploadPhoto' and 'createUser' functions from the 'utils' module.
import { uploadPhoto, createUser } from './utils';

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function handleProfileSignup() {
  // Use 'Promise.all' to execute both 'uploadPhoto' and 'createUser' concurrently.
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // When both promises are resolved, 'values' will be an array containing their results.
      // In this case, 'values[0]' contains the result of 'uploadPhoto',
      // and 'values[1]' contains the result of 'createUser'.

      // Log a message that combines the 'body' property from 'uploadPhoto' result
      // and the 'firstName' and 'lastName' properties from 'createUser' result.
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => {
      // Handle any errors that occur during the execution of either 'uploadPhoto' or 'createUser'.
      
      // Log an error message indicating that the signup system is offline.
      console.log('Signup system offline');
    });
}
