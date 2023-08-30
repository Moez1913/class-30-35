// object

const actor = {
  name: "Dark",
  age: 30,
  phone: "01723816984",
  money: 236573817363,
};

// const phone = actor.phone;
// console.log(phone)

// simle way
const { phone } = actor; // using object-proparty name as varriable name .//variable er nam cheng kora jai jmn phone er jaigai mobile likhleo hoto
// console.log(phone)

// array destructureing
const numbers = [45, 54];
const [first, second] = numbers;
// console.log(first, second)

// advace
function dobul(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditio]= dobul(9, 6);
console.log(prothom, ditio)