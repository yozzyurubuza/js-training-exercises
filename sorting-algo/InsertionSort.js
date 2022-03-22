'use strict';

//Insertion Sort

/*
Process:
1. Compare the 1st and 2nd Number
2. If 2nd number is lower, swap position with the first.
   2.1 If not, move on to the 3rd number.
   2.2 Compare the 3rd number to the 2nd.
   2.3 Continue comparing the 3rd number to the left, one by one, until the 3rd number is lower than the compared number.
3. Move on to the next number, and compare it to the left number, keep comparing and swapping until it reaches it's correct position.

*/

//Arrange the array in Ascending order using Insertion Sort

const UNSORTED_ARRAY = [64, 25, 12, 22, 11];
const unsortedArr2 = [23, 33, 65, 22, 7, 51, 6, 12, 4, 3];
const unsortedArr3 = [15, 20, 25];

const insertionSort = function (array) {
  let compareNum, selectedNum, position;
  console.log(array);

  for (let i = 0; i < array.length - 1; i++) {
    console.log(`Iteration I#${i + 1}`);
    //First Number to be compared
    compareNum = array[i];

    //For loop to determine how many numbers on the left.
    for (let j = i + 1; j > 0; j--) {
      //Selected Number to compare to left
      selectedNum = array[j];

      if (selectedNum > compareNum) {
        console.log(`${selectedNum} > ${compareNum}, no swapping...`);
        break;
      }

      //If selected number is lower, swap
      array[j - 1] = selectedNum;
      position = j - 1;
      array[j] = compareNum;

      console.log(`${selectedNum} < ${compareNum}, swapping...`);
      console.log(array);

      //Check if there is another number at the left for another comparison..
      if (position > 0) {
        compareNum = array[[position - 1]];
      }
    }
  }
};

insertionSort(UNSORTED_ARRAY);
