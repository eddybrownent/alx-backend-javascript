export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }

  let resultString = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      resultString += `${value.slice(startString.length)}-`;
    }
  }

  return resultString.slice(0, resultString.length - 1);
}
