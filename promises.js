// Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

// You want to end up with a function that you can run like this (happy path):

// testNum(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // 15 is greater than 10, success!
// And then the sad path:

// testNum(5)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // 5 is less than 10, error!

const testNum = num => new Promise ((resolve, reject) => {
  if (num > 10) {
    resolve(`${num} is greater than 10, success!`)
  } else if (num === 10) {
    resolve(`${num} is equal to 10, success!`)
  } else {
    reject(`${num} is less than 10, error!`)
  }
});

// console.log(testNum(12));
// console.log(testNum(10));
// console.log(testNum(2));

// Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

// After you make the functions with Promises, the happy path code looks like:

// makeAllCaps(['wowow', 'pants', 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
  
// // ['BIRD', 'PANTS', 'WOWOW']
// And the sad path should be:

// makeAllCaps(['wowow', 5, 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
  
// // 'No, the array you passed in contained an element that was not a string!'
let words = ['wowow', 'pants', 'bird']
let words2 = ['wowow', 5, 'bird']

const makeAllCaps = words => new Promise((resolve, reject) => {
  let newWords = words.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase()
    } else {
      reject('No, the array you passed in contained an element that was not a string!')
    }
  });
  return resolve(newWords)
})

const sortWords = words = new Promise((resolve, reject) => {
  let sortedWords = words.sort((a, b) => a - b);
  return resolve(sortedWords)
});

makeAllCaps(words)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))