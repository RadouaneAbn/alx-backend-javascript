export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let result = 0;
  if (weakMap.has(endPoint)) {
    result = weakMap.get(endPoint);
  }
  weakMap.set(endPoint, result + 1);

  if (result >= 5) { throw new Error('Endpoint load is high'); }
}
