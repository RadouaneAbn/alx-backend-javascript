export default function groceriesList() {
  const newMap = new Map();
  [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ].forEach((item) => newMap.set(...item));
  return newMap;
}
