export default function createEmployeesObject(departmentName, employees) {
  const worker = {
    [`${departmentName}`]:
      [...employees],
  };
  return worker;
}
