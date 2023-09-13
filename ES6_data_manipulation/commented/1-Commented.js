// This function, named 'getListStudentIds', takes an array of student objects as input.
// It returns an array containing the 'id' property of each student.
export default function getListStudentIds(students) {
    // Check if the input 'students' is an array.
    if (!Array.isArray(students)) {
      return []; // Return an empty array if 'students' is not an array.
    }
    // Map the 'id' property of each student and return the resulting array.
    return students.map((student) => student.id);
  }
  