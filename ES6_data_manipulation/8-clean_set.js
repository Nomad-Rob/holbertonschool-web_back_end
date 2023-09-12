export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const cleanedArray = Array.from(set)
    .filter((value) => value !== undefined && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return cleanedArray.join('-');
}
