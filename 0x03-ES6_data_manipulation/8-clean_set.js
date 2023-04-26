/* eslint-disable consistent-return */
export default function cleanSet(set, startString) {
  const output = [];

  set.forEach((element) => {
    if (!startString || typeof startString !== 'string') return '';
    if (element.startsWith(startString)) output.push(element.slice(startString.length));
  });

  return output.join('-');
}
