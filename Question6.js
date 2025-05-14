// ## **6. Rearrange Fruits**

// You have an array of fruits containing 10 elements. Your task is to use the **`splice`**
// method to rearrange the fruits in the following manner:

// 1. Remove the last 4 fruits from the end of the array.
// 2. Add the removed fruits to the beginning of the array in the same order they were removed.

// Write a JavaScript function named **`rearrangeFruits`** that takes an array of fruits as input
//  and performs the specified rearrangement. The function should return the modified array of
// fruits.

function rearrangeFruits(fruits) {
  let removedLastFour = fruits.splice(fruits.length - 4, 4);
  let result = [...removedLastFour, ...fruits];
  return result;
}

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Kiwi",
];

console.log(rearrangeFruits(fruits));

// [
//   "Strawberry",
//   "Watermelon",
//   "Peach",
//   "Kiwi",
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Pineapple",
//   "Grapes",
// ];
