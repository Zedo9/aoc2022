const BUFFER_SIZE_PART1 = 4;
const BUFFER_SIZE_PART2 = 14;

export function getCharactersCountBeforeFirstPacketMarkerP1(input: string) {
  return getCharactersCountBeforeFirstPacketMarker(input, BUFFER_SIZE_PART1);
}

export function getCharactersCountBeforeFirstPacketMarkerP2(input: string) {
  return getCharactersCountBeforeFirstPacketMarker(input, BUFFER_SIZE_PART2);
}

function getCharactersCountBeforeFirstPacketMarker(
  input: string,
  bufferSize: number
) {
  let index = 0;

  while (index < input.length) {
    const buffer = input.slice(index, index + bufferSize);
    if (allCharsAreDistinct(buffer)) {
      break;
    }
    index++;
  }

  return index + bufferSize;
}

function allCharsAreDistinct(str: string) {
  return new Set(str).size === str.length;
}
