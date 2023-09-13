// Import the 'signUpUser' and 'uploadPhoto' functions from their respective modules.
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// This is a JavaScript async function named 'handleProfileSignup'.
// It performs the following steps:
// 1. Signs up a user with the provided 'firstName' and 'lastName' using 'signUpUser'.
// 2. Tries to upload a photo with the provided 'fileName' using 'uploadPhoto'.
// 3. Collects and returns an array of status objects indicating whether each step was fulfilled or rejected.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  // Initialize an empty array 'status' to store the result of each step.
  const status = [];

  // Use 'await' to asynchronously execute the 'signUpUser' function and handle the result.
  await signUpUser(firstName, lastName)
    .then(async (data) => {
      // If 'signUpUser' resolves successfully, push a status object into the 'status' array.
      status.push({ status: 'fulfilled', value: data });

      // Use 'await' to asynchronously execute the 'uploadPhoto' function, even though
      // this step is not awaited. This means that the function will continue execution
      // without waiting for the 'uploadPhoto' function to complete.
      await uploadPhoto(fileName);
    })
    .catch((err) => {
      // If any error occurs during the process, push a status object indicating rejection
      // into the 'status' array, including the error message.
      status.push({ status: 'rejected', value: err.toString() });
    });

  // Return the 'status' array, which contains the result of each step (fulfilled or rejected).
  return status;
}
