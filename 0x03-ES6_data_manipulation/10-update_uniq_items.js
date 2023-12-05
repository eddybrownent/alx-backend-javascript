export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = inputMap;

  for (const [item, quantity] of inputMap) {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    }
  }

  return updatedMap;
}
