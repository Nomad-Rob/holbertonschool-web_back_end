// This function takes an employeesList as input and creates a report object based on it.
export default function createReportObject(employeesList) {
  // Create a copy of the employeesList using the spread operator and store it in allEmployees.
  const allEmployees = { ...employeesList };

  // Return an object containing allEmployees and a method to get the number of departments.
  return {
    allEmployees, // Store the copied employeesList in the report object.
    getNumberOfDepartments() {
      // Calculate the number of departments by counting the keys in the allEmployees object.
      return Object.keys(allEmployees).length;
    },
  };
}
