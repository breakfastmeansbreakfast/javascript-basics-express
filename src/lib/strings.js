const sayHello = (name) => {
  // your code here
  return 'Hello, ' + name + '!';
};

const uppercase = (string) => {
  // your code here
  return string.toUpperCase();
};

const lowercase = (string) => {
  // your code here
  return string.toLowerCase();
};

const countCharacters = (string) => {
  // your code here
  return string.length;
};

const firstCharacter = (string) => {
  // your code here
  return string.substr(0, 1)
};

const firstCharacters = (string, n) => {
  // your code here
  return string.substr(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
}
