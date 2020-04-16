const createPerson = (name, age) => {
const newPerson = {
name: name,
age: age,
}
return newPerson
};

const getName = (object) => {
return object.name
};

const getProperty = (property, object) => {
return object.age
};

const hasProperty = (property, object) => {
return object.hasOwnProperty(property)
};

const isOver65 = (person) => {
return person.age > 65 ? true : false
};

const getAges = (people) => {
return people.map(function (obj) {return obj.age})
};

const findByName = (name, people) => {
let person =  people.filter(obj => {return obj.name === name})
return person[0] // workaround because test wont accept a sinlge object array
};

const findHondas = (cars) => {
return hondas = cars.filter(obj => obj.manufacturer === 'Honda')
};

const averageAge = (people) => {
let ageTotal = 0
let ages = people.map(obj => {ageTotal += obj.age})
return ageTotal / people.length
};

const createTalkingPerson = (name, age) => {
return {
  age: age,
  introduce: function (intro) {return `Hi ${intro}, my name is ${name} and I am ${age}!`},
  name: name
}
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}
