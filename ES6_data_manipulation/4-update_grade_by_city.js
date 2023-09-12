export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsByCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsByCity.map((student) => {
    const matchingGrade = newGrade.find((grade) => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade };
  });
  return updatedStudents;
}
