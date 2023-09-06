// This function appends a specified string to each value in an array and returns a new array with the modified values.
export default function appendToEachArrayValue(array, appendString) {
  // Create an empty array to store the modified values.
  const modifiedArray = [];

  // Iterate through each value in the input array.
  for (const value of array) {
    // Append the specified string to the current value and push it into the modifiedArray.
    modifiedArray.push(appendString + value);
  }

  // Return the new array containing the modified values.
  return modifiedArray;
}
