export default function cleanSet(set, startString) {
  let resultString = '';

  if (!startString || !startString.length) {
    return '"Execution not successful"';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      resultString += `${value.slice(startString.length)}-`;
    }
  }

  return resultString.slice(0, -1);
}
