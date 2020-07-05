/**
 * @file This is the main file
 *
 * @version 0.1
 * @author Josh Mu
 * @copyright 2020
 */

/**
 * Function to create a string of 'hello' words
 *
 * @param {number} num - number of times to say 'hello'
 * @returns {string} - text string of 'hello' repeats
 */

function hello(num) {
  let output = "";
  for (let i = num; i < num; i++) {
    output += "hello ";
  }
  return output;
}

/**
 * @type {string} - text string of 'hello' words
 */

const str = hello(10);

console.log(str);
