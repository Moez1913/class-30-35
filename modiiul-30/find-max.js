const max = Math.max(6, 23, 45, 1, 89,23)
console.log(max)

// find max from array:
const numbers = [12, 34, 54, 45, 55, 67, 23];
const arrayMax = Math.max(...numbers) 
// sudhu numbers dile nan dakhabe ...numbers dile arry er vertor thke number gula ber kore dei/
// (... ke spred bole)
console.log(arrayMax)

// use spread(...) operator to copy array
const friends = [2, 3, 5, 45, 34, 23]
// const bondhu = friends;
// bondhu.push(12);
// console.log(friends);
// console.log(bondhu);   // aivabe korle 12 ta friend o pabe bondhu o pabe

const dost = [...friends];
dost.push(15);
console.log(friends);
console.log(dost)

//  Advance 
const sonkha = [...friends, 7777] // avabe korle 7777 ta sonkha er vetor bose jabe push kora lagbe na

console.log(sonkha)
