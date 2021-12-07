// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

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
