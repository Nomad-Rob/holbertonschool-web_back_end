// This is a JavaScript function named 'signUpUser'.
// It simulates the process of signing up a user with the provided first name and last name
// by resolving a Promise with an object containing the user's first name and last name.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function signUpUser(firstName, lastName) {
    // Use 'Promise.resolve' to immediately create and resolve a Promise.
    // This Promise will contain an object with the provided 'firstName' and 'lastName' as properties.
    return Promise.resolve({
      firstName,
      lastName,
    });
  }
  