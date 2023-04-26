export default function cleanSet(set, startString) {
  const output = [];

  set.forEach((element) => {
    if (!startString) return;
    if (element.startsWith(startString)) output.push(element.slice(startString.length));
  });

  return output.join('-');
}
