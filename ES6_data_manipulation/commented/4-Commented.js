// This function, named 'updateStudentGradeByCity', takes an array of student objects ('students'),
// a 'city' parameter, and a 'newGrade' parameter.
// It updates the 'grade' property of students in the specified city based on the 'newGrade' data.
export default function updateStudentGradeByCity(students, city, newGrade) {
    // Filter the 'students' array to get students in the specified 'city'.
    const studentsByCity = students.filter((student) => student.location === city);
  
    // Map through the students in the city and update their 'grade' property
    // based on the 'newGrade' data, matching by 'studentId'.
    const updatedStudents = studentsByCity.map((student) => {
      const matchingGrade = newGrade.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
    // Return the updated array of students.
    return updatedStudents;
  }
  