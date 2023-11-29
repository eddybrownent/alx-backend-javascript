export default function createIteratorObject(report) {
  let everyEmp = [];
  for (const worker of Object.values(report.allEmployees)) {
    everyEmp = [...everyEmp, ...worker];
  }

  return everyEmp;
}
