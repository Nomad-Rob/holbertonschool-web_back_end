// This function, named 'cleanSet', takes a Set ('set') and a 'startString' as input.
// It removes items from the Set that do not start with 'startString'.
// The function returns a string containing the remaining items, joined by '-'.
export default function cleanSet(set, startString) {
    // Check if 'startString' is falsy or not a string.
    if (!startString || typeof startString !== 'string') {
      return '';
    }
    // Initialize an empty 'result' string.
    let result = '';
  
    // Iterate through each item in the Set.
    for (const item of set) {
      // Check if the item starts with 'startString'.
      if (item && item.startsWith(startString)) {
        // Add the item to the 'result' string after removing 'startString' and appending '-'.
        result += `${item.slice(startString.length)}-`;
      }
    }
    // Remove the trailing '-' and return the result.
    return result.slice(0, result.length - 1);
  }
  