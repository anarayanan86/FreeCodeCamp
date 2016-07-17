/* Inventory Update 
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory
item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory
array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var results = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {      
      if (arr1[i][1] == arr2[j][1]) {
        arr1[i][0] = arr1[i][0] + arr2[j][0];
        results.push(arr1[i]);
        arr2.splice(j, 1);
        arr1.splice(i, 1);
      }
    }
    results.push(arr1[i]);
  }
  for (k = 0; k < arr2.length; k++) {
  	results.push(arr2[k]);
	}
  var c = results.sort(function(a, b) {
    return a[1] > b[1];
  });
  return c;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

/* returns: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
*/
