// This function, named 'getStudentsByLocation', takes an array of student objects ('students') and a 'city' parameter.
// It returns an array containing only the students whose 'location' property matches the provided 'city'.
export default function getStudentsByLocation(students, city) {
    // Use the 'filter' method to create a new array with students matching the 'city'.
    return students.filter((student) => student.location === city);
  }
  