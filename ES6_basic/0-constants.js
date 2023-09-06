// Function to return a task description.
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Declare a constant variable 'task' with a string value.
  return task; // Return the 'task' string.
}

// Function to return a fixed message.
export function getLast() {
  return ' is okay'; // Return the string ' is okay'.
}

// Function to combine a predefined string with the result of 'getLast'.
export function taskNext() {
  let combination = 'But sometimes let'; // Declare a variable 'combination' using 'let'.
  combination += getLast(); // Append the result of 'getLast' to 'combination'.
  return combination; // Return the combined string.
}
