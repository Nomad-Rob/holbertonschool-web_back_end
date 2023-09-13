// This is a JavaScript function named 'loadBalancer'.
// It takes two Promise objects, 'chinaDownload' and 'USDownload', as parameters.
// The function returns a Promise that races between the two provided Promises.

// The 'export default' statement allows this function to be the default export
// when this module is imported in other parts of the code.

export default function loadBalancer(chinaDownload, USDownload) {
    // Use 'Promise.race' to create a new Promise.
    // 'Promise.race' returns a Promise that settles (fulfills or rejects) as soon as one of the
    // input Promises settles (either fulfills or rejects), whichever happens first.
  
    return Promise.race([chinaDownload, USDownload]);
  }
  