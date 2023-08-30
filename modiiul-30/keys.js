const glass =  {
    name: 'glass',
     color: 'golden',
      price: 12, 
      isCleaned: true};  //[ name, color, price etc colon er age j gula thake tadr porparty name ba key bole]

// console.log(glass);

const keys = Object.keys(glass);
// console.log(keys)

// value of an object named glass

const value = Object.values(glass)
// console.log(value)

//array of arrray or two dimesional array
const pair = Object.entries(glass);
// console.log(pair)

// remove property from  object

// delete glass.isCleaned;
// console.log(glass)

// another way 
// const {isCleaned, ...shortglass} = glass;  //etr mane holo isclened k bad diye shortglass name notun ekta object creat korbe..

// console.log(shortglass)

   //another way-2 freeze kore rakhle kono kichu add kora jabe na delet korao jabe na chencg kora o jabe na /oposit holo,seal

//    Object.freeze(glass);
  delete glass.isCleaned;
   console.log(glass); 
