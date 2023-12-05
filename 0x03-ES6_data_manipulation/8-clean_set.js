export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  const resultString = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return resultString;
}
