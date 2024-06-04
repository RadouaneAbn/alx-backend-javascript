export default function getStudentsByLocation(arrayOfObjects, cityName) {
  if (!Array.isArray(arrayOfObjects) || typeof cityName !== 'string') { return []; }
  return arrayOfObjects.filter((object) => object.location === cityName);
}
