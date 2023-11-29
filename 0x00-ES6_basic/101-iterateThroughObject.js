export default function iterateThroughObject(reportWithIterator) {
  const names = [];

  for (const employee of reportWithIterator) {
    names.push(employee);
  }

  return names.join(' | ');
}
