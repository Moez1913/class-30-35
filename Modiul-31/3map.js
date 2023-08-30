const numbers = [4, 5, 2, 8, 10];

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled)

/////simple way

function doubleIt(num) {
    return num * 2; 
}
const result = numbers.map(doubleIt) 

const double2 = n => n*2
//? map array er protekta uopadan er opor function ta chalabe diye reslt ta k akta arry hisabe return korbe//

// console.log(result)

// ek line a double2 ekta arrow function uor a dak
const output = numbers.map(double2)
// console.log(output)

// agam kono functino likh achara
const output2 = numbers.map(n => n * 2)
console.log(output2);
