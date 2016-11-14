/* Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a
two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var j = arr.length;
  if (j % size === 0) {
    totalSlices = j/size;
  } else {
    totalSlices = Math.floor(j/size + 1);
  }
  var final = [];
  var temp = arr;
  for (i = 0; i < totalSlices; i++) {
    temp[i] = temp.slice(i * size, size*(1 + i));
    final.push(temp[i]);
   }
  return final;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3);
// returns [["a", "b", "c"], ["d", "e", "f"], ["g", "h"]]
