// This function, named 'updateUniqueItems', takes a Map ('map') as input.
// It updates the values of items with a quantity of 1 to 100.
// Throws an error if 'map' is not an instance of Map.
// Returns the updated Map.
export default function updateUniqueItems(map) {
    // Check if 'map' is an instance of Map.
    if (!(map instanceof Map)) {
      throw Error('Cannot process');
    }
  
    // Iterate through the Map's entries.
    for (const [key, value] of map) {
      // Check if the value is equal to 1.
      if (value === 1) {
        // Update the value to 100.
        map.set(key, 100);
      }
    }
  
    // Return the updated Map.
    return map;
  }
  