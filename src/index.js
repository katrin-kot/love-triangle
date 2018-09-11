/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
  for (var i = 0; i < preferences.length; i++) {
   const first =preferences[i];
  const second=preferences[first-1];
  const third=preferences[second-1];
  if (third-1===i && first !== second) {
    count=count+1;
  }
  };
  return count/3;
};