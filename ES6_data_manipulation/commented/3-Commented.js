// This function, named 'getStudentIdsSum', takes an array of student objects as input.
// It calculates the sum of 'id' properties of all students in the array.
export default function getStudentIdsSum(students) {
    // Check if the input 'students' is an array.
    if (!Array.isArray(students)) {
      return []; // Return an empty array if 'students' is not an array.
    }
    // Use the 'reduce' method to accumulate the sum of 'id' properties.
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  