export default function cleanSet(set, startString) {
  const stringLength = startString.length;
  if (stringLength === 0) {
    return '';
  }
  const result = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(stringLength));
    }
  }

  return result.join('-');
}
