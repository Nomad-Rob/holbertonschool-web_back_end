// This function returns the number of arguments passed to it.
export default function returnHowManyArguments(...args) {
  // Initialize a variable to count the number of arguments.
  let n = 0;

  // Iterate through the elements in the args array.
  for (const arg of args) {
    // Check if the current argument is defined (not undefined).
    if (typeof arg !== 'undefined') {
      // If defined, increment the count.
      n += 1;
    }
  }

  // Return the total number of defined arguments.
  return n;
}
