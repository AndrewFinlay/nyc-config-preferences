'use strict';

const testOne = require('./sourcemapped/index');
const testTwo = require('./sourcemapped/index2');
const testThree = require('./3rd-party/index2');


exports.testfunction = (a, b) => a + b;

exports.testOthers = () => {
    const resultOne = testOne.testfunction(1,2);
    const resultTwo = testTwo.testfunction(3,4);
    console.log(`Result 1 = ${resultOne}`);
    console.log(`Result 2 = ${resultTwo}`);

    return resultOne + resultTwo;
}