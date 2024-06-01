export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const allNames = [];

  for (const department of Object.values(allEmployees)) {
    for (const name of department) {
      allNames.push(name);
    }
  }

  return allNames;
}
