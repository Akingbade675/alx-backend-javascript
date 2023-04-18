export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const arr of array) {
    newArray.push(appendString + arr);
  }

  return newArray;
}
