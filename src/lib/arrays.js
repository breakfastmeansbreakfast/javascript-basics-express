const getNthElement = (index, array) => {
  let index2 = index - array.length;
  if (index >= array.length) {
    return array[index2];
  } else {
    return array[index]
  }
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
array.push(element);
};


const addToArray2 = (element, array) => {
array = array.concat(element);
return array;
};

const removeNthElement = (index, array) => {
array.splice(index, 1)
return array

};

const numbersToStrings = (numbers) => {
return numbers.map(String)
};

const uppercaseWordsInArray = (strings) => {
return strings.map(uppercase => uppercase.toUpperCase());
};

const reverseWordsInArray = (strings) => {
return strings.map(reversed => reversed.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
return numbers.filter(number => number % 2 === 0 )
};

const removeNthElement2 = (index, array) => {
return array.filter(arr => arr !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
return strings.filter(vorderman => vorderman.charAt(0).match(/[aeiou]/gi));
};

const removeSpaces = (string) => {
return string.replace(/\s/g,'');
};

const sumNumbers = (numbers) => {
return numbers.reduce((total,val) => total + val);
};

const sortByLastLetter = (strings) => {
return strings.sort((cur,next) => {
return cur.charCodeAt(cur.length -1) - next.charCodeAt(next.length -1)}); 
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
