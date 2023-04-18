export default function createIteratorObject(report) {
  const iteratorObj = [];
  for (const employees of Object.values(report.allEmployees)) {
    iteratorObj.push(...employees);
  }
  return iteratorObj;
}
