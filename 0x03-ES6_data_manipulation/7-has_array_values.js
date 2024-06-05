export default function hasValuesFromArray(arraySet, subArray) {
  return subArray.every((element) => arraySet.has(element));
}
