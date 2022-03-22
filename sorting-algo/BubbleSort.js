// Sorting Algorithm Practice
// Bubble Sort

/*
Process:
1. Get the 1st 2 number in the array
2. Compare them, if the first number is higher, swap the position with second number.
  2.1 If not, don't swap and then start comparing 2nd and 3rd number.
3. Sorting will end if no more swapping occurs in the whole iteration.
*/

//Sort the array in ascending order using bubble sort.

const UNSORTED_ARRAY = [64, 25, 12, 22, 11];
const unsortedArr2 = [23, 33, 65, 22, 7, 51, 6, 12, 4, 3];
const unsortedArr3 = [15, 20, 25];

const bubbleSort = function (array) {
  let repeatBubbleSort = true;
  let firstElem, secondElem;

  console.log(array);

  while (repeatBubbleSort == true) {
    repeatBubbleSort = false; // Initially reset repeatBubbleSort to false.
    for (let i = 0; i < array.length - 1; i++) {
      //First Number for Comparison
      firstElem = array[i];
      secondElem = array[i + 1];

      console.log(
        `Iteration #${i + 1}: Comparing ${firstElem} and ${secondElem}`
      );

      //Compare the 2 numbers, don't swap if first is lower
      if (firstElem < secondElem) {
        console.log(`${firstElem} < ${secondElem}, no swapping`);
        continue;
      }

      //if first is higher, swap
      array[i] = secondElem;
      array[i + 1] = firstElem;
      console.log(`${firstElem} > ${secondElem}, swapping`);
      console.log(array);
      repeatBubbleSort = true; //Repeat bubble sort because a swapping occured.
    }
  }
};

bubbleSort(UNSORTED_ARRAY);