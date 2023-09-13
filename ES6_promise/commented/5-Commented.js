// This is a JavaScript function named 'uploadPhoto'.
// It simulates the process of uploading a photo with a given 'fileName'.
// However, in this implementation, it always rejects the Promise with an error message.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function uploadPhoto(fileName) {
    // Create a new Promise object.
    // The Promise constructor takes a single argument, which is a function.
    // This function is sometimes called the "executor function."
    // It receives two arguments: 'resolve' and 'reject'.
    return new Promise((resolve, reject) => {
      // In this implementation, the Promise is always rejected with an error message.
      
      // Reject the Promise with an error message indicating that the provided 'fileName'
      // cannot be processed. This simulates a failure in the photo uploading process.
      reject(Error(`${fileName} cannot be processed`));
    });
  }
  