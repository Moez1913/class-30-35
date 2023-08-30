//data access

const data = [{id: 1, name: 'abul', address: 'kochu khet'}]; // aita asole object na //array er vetor theke object k alad korbo jvabbe

// console.log(data[0].address);

const product = {
    count: 5000,
    data: [
        {id: 1, name: 'lenevo laptop', price: 65000},
        { id :2 ,name:'samsung tv' ,price:4987},
    ]
}

// second product price dorkar ///
// console.log(product.data[1].price)

const user = {
    id: 5001,
    name: 'soriful Raj',
    address: {
      street: {
        first: '54/1 uttor side',
        second: 'porinbag',
        third: 'no dorai'
      },
      city: 'Dhaka'

    }
}
console.log(user.address.street.second)

const user2 = {
    id: "5002",
    name:'sara',
    address:{
        city: 'chitagong',
        country: 'bangladesh'
    }
}
console.log(user2.address.street?.second) // ?-sine er mane proparty ta thakle dakhao na thakle nai eroro khabe na ete kore