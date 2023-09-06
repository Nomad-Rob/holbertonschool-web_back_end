// Constructor function to create a NeighborhoodsList object.
function NeighborhoodsList() {
  // Initialize the sanFranciscoNeighborhoods array with some default values.
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Method to add a new neighborhood to the list.
  this.addNeighborhood = function (newNeighborhood) {
    // Push the new neighborhood into the array.
    this.sanFranciscoNeighborhoods.push(newNeighborhood);

    // Return the updated list of neighborhoods.
    return this.sanFranciscoNeighborhoods;
  };
}

// Export the NeighborhoodsList constructor function as the default export.
export default NeighborhoodsList;
