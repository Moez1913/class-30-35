const numbers = [1, 6, 8, 4];
// for(let i = 0; i < numbers.length; i++){}

// for off loop 
for(const num of numbers){
    // console.log(num);
}

const nobab = 'siraj ud doula';
for(const char of nobab){
    // console.log(char);
}

// object  er khetre for in loop
const glass =  {
    name: 'glass',
     color: 'golden',
      price: 12, 
      isCleaned: true};

    //   for(const key in glass){
    //     const value = glass[key];
        // console.log(key, value)
      }

    //   optional
    const keys = Object.keys(glass);
    console.log(key)
    for(const key of keys){
        const vlaue = glass[key];
        console.log(key, value)
    }