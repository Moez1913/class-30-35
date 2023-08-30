// for mor than two parameter 
const labDifference = (x, y) => x - y;
const sum = labDifference(5, 3);
// console.log(sum);

const labMultiply = (first, second, third) => first * second * third;
const multiplecation = labMultiply(4, 5, 6);
// console.log(multiplecation);

// For single parameter => object --with baraket///

const getAge = (person) => person.age;
const student = { name: 'Dark', age: 24}
const age = getAge(student)
// console.log(age)

// For single parameter => array-- without braket//

const getThird = numbers => numbers[2];
const third = getThird([5, 4, 6, 7, 8])
// console.log(third)

// No paremeter ---->

const getPI = () => Math.PI
// console.log(getPI())


//**larg arrow funtion using second braket like function */

const doMath = (x, y, z) => {
    const sum = x + y  + z;
    const multiplecation = x * y * z;
    const result = sum + multiplecation
    return result
}

// const dark = doMath(45, 44, 33)
// console.log(dark)