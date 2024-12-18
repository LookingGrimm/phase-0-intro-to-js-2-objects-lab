// Write your solution in this file!
// Define the initial employee object
const employee = {
    name: "Sam",
    streetAddress: "123 Main Street"
  };
  
  // Function: Non-destructively update an employee with a key and value
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,  // Clone the employee object
      [key]: value  // Add or update the key-value pair
    };
  }
  
  // Function: Destructively update an employee with a key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Update the key-value pair directly in the object
    return employee;        // Return the modified employee object
  }
  
  // Function: Non-destructively delete a key from an employee object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };  // Clone the employee object
    delete newEmployee[key];              // Delete the specified key
    return newEmployee;                   // Return the new employee object
  }
  
  // Function: Destructively delete a key from an employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Delete the specified key directly in the object
    return employee;       // Return the modified employee object
  }
  
  // Export the employee object and functions (if required)
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  