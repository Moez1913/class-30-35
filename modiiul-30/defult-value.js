// defult value adding porcess if valu is not provided,take this as a defult

function defult(m1, m2 = 10) {
  const math = m1 + m2;
  console.log(math);
  return math;
}

defult(4);

//  note: string er khetre defult man '' fak and number er khetre 0 ba 1 arey [] object{}

function fullName(first, last) {
  const full = first + ' ' + last;
  return full; 
}
const name = fullName('Dark', 'Matter')
console.log(name)
