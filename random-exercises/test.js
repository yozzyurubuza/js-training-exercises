'use strict';

for (let i = 0; i < 10; i++) {
  let f = function (i) {
    return (function () {
      console.log(i);
    })(i);
  };
}
