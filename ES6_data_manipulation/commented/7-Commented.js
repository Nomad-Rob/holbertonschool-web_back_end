// This function, named 'hasArrayValues', takes an array ('arr') and an array of 'values' as input.
// It checks if all the values in 'values' are present in the 'arr'.
// Returns 'true' if all values are found, 'false' otherwise.
export default function hasArrayValues(arr, values) {
    // Create a Set from the input array for efficient value checking.
    const set = new Set(arr);
  
    // Iterate through each value in 'values'.
    for (const value of values) {
      // If a value is not present in the Set, return 'false'.
      if (!set.has(value)) {
        return false;
      }
    }
    // If all values are found, return 'true'.
    return true;
  }
  