/* eslint-disable consistent-return */
export default function cleanSet(set, startString) {
  const output = [];

  set.forEach((element) => {
    if (!startString || startString.length === 0 || typeof startString !== 'string') return '';
    if (element.startsWith(startString)) output.push(element.slice(startString.length));
  });

  return output.join('-');
}
