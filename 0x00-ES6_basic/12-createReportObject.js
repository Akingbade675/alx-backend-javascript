export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentNames, employees] of Object.entries(employeesList)) {
    allEmployees[departmentNames] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return (Object.values(employeesList).length);
    },
  };
}
