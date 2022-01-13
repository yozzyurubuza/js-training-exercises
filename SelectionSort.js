//Sorting Algorithms Practice

//1. Selection Sort - find the minimum element in array and place it in front.

/*
Process:
1. Get the 1st number to compare
2. Compare the number to its right
3. If the number is lower, set it as the current minimum then also get its array position. 
  3.1 If not, just move on to the next number to its right.
4. After reaching the end of the array with the 1st comparison, swap the 1st number with the recorded current minimum and array position.
5. Repeat step 1, using the 2nd number in the array.
*/

//Arrange the unsorted array into ascending order

const UNSORTED_ARRAY = [64, 25, 12, 22, 11];
const unsortedArr2 = [23, 33, 65, 22, 7, 51, 6, 12, 4, 3];
const unsortedArr3 = [15, 20, 25];

let currentMinimum, elementToCompare, minimumPosition;

const selectionSort = function (array) {
  console.log(array); // Display the very first position
  //For loop i, get the element for comparison
  for (let i = 0; i < array.length - 1; i++) {
    //Comparing the element to the rest of the array elements
    elementToCompare = array[i];
    currentMinimum = elementToCompare;
    minimumPosition = i;
    //For loop j, compare the array[i] to the rest of the elements on the right
    for (let j = i + 1; j < array.length; j++) {
      console.log(`Iteration #${j - i}, Current Minimum: ${currentMinimum}`);

      if (currentMinimum < array[j]) {
        console.log(`${currentMinimum} is lower than ${array[j]}`);
        continue;
      }

      currentMinimum = array[j];
      minimumPosition = j;

      console.log(
        `New Current Minimum is: ${currentMinimum}, found at Array Position ${minimumPosition}`
      );
    }

    //After comparing For loop j, swap the position of the elements
    array[i] = currentMinimum;
    array[minimumPosition] = elementToCompare;
    console.log(array);
  }
  return array;
};

selectionSort(UNSORTED_ARRAY);
