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

//Arrange the unsorted array into ascending order

const unSortedArr = [64, 25, 12, 22, 11];
const unsortedArr2 = [23, 22, 51, 6, 12];
let currentMinimum, elementToCompare, elementPosition;

const selectionSort = function (array) {
  //Position of the Array
  for (let i = 0; i < array.length - 2; i++) {
    //Comparing the element to the rest of the array elements
    elementToCompare = array[i];
    currentMinimum = elementToCompare;
    for (let j = i + 1; j < array.length; j++) {
      console.log(`Iteration #${j}, Current Minimum: ${currentMinimum}`);
      if (currentMinimum > array[j]) {
        currentMinimum = array[j];
        elementPosition = j;
        console.log(
          `New Current Minimum is: ${currentMinimum}, found at Array Position ${elementPosition}`
        );
      } else {
        console.log(`${currentMinimum} is lower than ${array[j]}`);
      }
    }
    //Swap elements
    array[i] = currentMinimum;
    array[elementPosition] = elementToCompare;
    console.log(array);
  }
};

selectionSort(unsortedArr2);
