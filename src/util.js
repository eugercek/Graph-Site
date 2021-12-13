function printDistanceAndPrevArray({ distanceArray, prevArray }) {
  console.log(distanceArray);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < prevArray.length; i++) {
    console.log(`${prevArray[i]} -> ${i}`);
  }
}

export { printDistanceAndPrevArray };
