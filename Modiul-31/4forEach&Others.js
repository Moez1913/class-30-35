const numbers = [2, 3, 5, 6, 7];
// const result = numbers.forEach(n => console.log(n))
const result = numbers.forEach(n => {

}) // konokichu return korbe na undifind dekhabe
// console.log(result)


//>filter>> select elements based on a condition and returns an array with the elements that fulfilled the condition>

const plyaer = [75, 65, 56, 67, 72,]
const selected = plyaer.filter(p => p > 70);
// console.log(selected)

const friends = ['Tom', 'Moez', 'Dark', 'shanta', 'nurshad']
const oddfriend = friends.filter(n => n.length >= 4)
// console.log(oddfriend)

//> find>>> j prothom upadan ta sorto puron korbe takei sudhu dakhabe sorto math na korle undifind dakhabe


const plyaer2 = [75, 65, 56, 67, 72,]
const selected2 = plyaer2.find(n => n > 70)
// console.log(selected2)
