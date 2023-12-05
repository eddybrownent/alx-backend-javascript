export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groMap = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const item of items) {
    groMap.set(item[0], item[1]);
  }
  return groMap;
}
