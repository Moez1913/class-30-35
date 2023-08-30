// function declaretion :

// function add(a, b) {
//   const result = a + b;
//   return result;
// }
function add(a, b) {
//   const result = a + b;
//   return result; ekhane result variabl diclar na kore sorasori a+b return kora jai.
return a + b;
}

const sum = add(5, 90);
console.log(sum);


// function expression variable declar kore tar vetro function decler kora jai
// ei khetre funtion er nam thakbe na 
const add2 = function(a, b){
    return a + b;
}

const sum2 = add(5, 6)
console.log(sum2)

// arrow function//=ES6

const add3 = (a, b) => a + b;
const sum3 = add3(30, 20);
console.log(sum3)