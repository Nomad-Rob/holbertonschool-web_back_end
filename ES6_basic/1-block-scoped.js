// This function takes a boolean parameter trueOrFalse and returns an array with two values.
export default function taskBlock(trueOrFalse) {
  // Initialize task and task2 variables with default values.
  const task = false;
  const task2 = true;

  // Check the value of trueOrFalse.
  if (trueOrFalse) {
    // If trueOrFalse is true, create a new scope and set task and task2 to different values.
    const task = true;
    const task2 = false;
  }

  // Return an array with the values of task and task2.
  // Note that this returns the outer scope values if trueOrFalse is false,
  // and the inner scope values if trueOrFalse is true.
  return [task, task2];
}
