// This function creates an employees object with a specified department name and a list of employees.
export default function createEmployeesObject(departmentName, employees) {
  // Create an empty object to store the employees data.
  const obj = {};

  // Assign the departmentName as a property of the object and set its value to the employees array.
  obj[departmentName] = employees;

  // Return the created employees object.
  return obj;
}
