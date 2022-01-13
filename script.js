// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

/*
const testObject1 = {
  name: "matt",
  age: "25",
  gender: "male",
};

const testObject2 = {
  name: "matt",
  age: "25",
  gender: "male",
};

const compareObj = function (testObject1, testObject2) {
  //Compare Keys Length
  const testObjectKeys1 = Object.keys(testObject1);
  const testObjectKeys2 = Object.keys(testObject2);

  if (testObjectKeys1.length !== testObjectKeys2.length) {
    console.log(
      `Object property length does not match (${testObjectKeys1.length} vs ${testObjectKeys2.length})`
    );
    return false;
  }

  //Compare Property Values
  for (let i = 0; i <= testObject1.length; i++) {
    if (testObject1[i] !== testObject2[i]) {
      console.log(`${testObject1[i]} is not the same as ${testObject2[i]}`);
      return false;
    }
  }
  console.log("Objects have the same property value");
  return true;
};

compareObj(testObject1, testObject2);
*/

//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

/*

const sampleString = 'w3resource';

//4 different ways of transforming string to array
const splitString = sampleString.split('');
const usingSpread = [...sampleString];
const usingArrayFrom = Array.from(sampleString);
const usingObjectAssign = Object.assign([], sampleString);

console.log(splitString);
// console.log(usingSpread);
// console.log(usingArrayFrom);
// console.log(usingObjectAssign);

//Function to convert string to array, then rotate.
const rotateString = function (string) {
  const newString = [];
  console.log(string.length);
  for (let i = 0; i <= string.length - 1; i++) {
    newString[i] = string[string.length - 1 - i];
  }
  return newString;
};

const invertedWordArray = rotateString(splitString);

//Return array to string
const invertedWordString = invertedWordArray.join('');
console.log(invertedWordString);

*/

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

/*
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

selectionSort(unsortedArr2);
*/

//W3schools JS Exercise - https://www.w3schools.com/js/js_exercises.asp

/*
function myFunction() {
  alert('Hello');
  return 'Hello';
}

// document.getElementById('dummy').innerHTML = myFunction();

// const txt = 'We are "Vikings"';
// alert(txt);

//Retrieving Dates
const d = new Date();
// alert(d);
const year = d.getFullYear();
console.log(year);

const month = d.getMonth();
console.log(month);

//JS Math

let r = Math.random();
console.log(r);

let x = Math.max(10, 20);
console.log(x);

const fruits = ['Apple', 'Banana', 'Orange'];
for (x in fruits) {
  console.log(fruits[x]);
}
*/

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
  let firstCompare, secondCompare;

  console.log(array);

  while (repeatBubbleSort == true) {
    repeatBubbleSort = false; // Initially reset repeatBubbleSort to false.
    for (let i = 0; i < array.length - 1; i++) {
      //First Number for Comparison
      firstCompare = array[i];
      secondCompare = array[i + 1];

      console.log(
        `Iteration #${i + 1}: Comparing ${firstCompare} and ${secondCompare}`
      );

      //Compare the 2 numbers, swap if first is lower
      if (firstCompare < secondCompare) {
        console.log(
          `${firstCompare} is lower than ${secondCompare}, no swapping will occur.`
        );
        console.log(array);
        continue;
      }

      //if first is higher
      array[i] = secondCompare;
      array[i + 1] = firstCompare;
      console.log(
        `${firstCompare} is higher than ${secondCompare}, swapping...`
      );
      console.log(array);
      repeatBubbleSort = true; //Repeat bubble sort because a swapping occured.
    }
  }
};

bubbleSort(UNSORTED_ARRAY);
