// Array
// let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Plain Old JavaScript Object
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}

//nested data
const orders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 40.00,
        ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00,
        ingredients: ["cardamon", "rose water", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5,
        ingredients: ["Andre Blush Champagne", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00,
        ingredients: ["earl grey", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    }
]
//Read values from Objects 
cakeOrder1.flavor
cakeOrder1["flavor"]
Object.keys(cakeOrder1)
Object.values(cakeOrder1)
Object.entries(cakeOrder1)

//Update items in objects
cakeOrder1.price = 20.00
cakeOrder1["price"] = 30.00

//Delete
delete cakeOrder1.size
console.log(cakeOrder1)
cakeOrder1.size = 'cup cake'

//let cakeOrder2 = cakeOrder1
//Pass by reference 
let cakeOrder2 = {...cakeOrder1, complete:true, price:15}

// Create a new property 
// cakeOrder1["complete"] = false 
// cakeOrder1.complete = true

//loop through and log an object
function loopThrough(cakes){
    for(key in cakes){
        console.log(key)
        console.log(cakes[key])

    }
}
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']

console.log(cakeNames)
//Read Arrays
cakeNames[0]
//cakeNames[8]
cakeNames[cakeNames.length-1]

//change the original
cakeNames.push('salted carmel')
// make a copy
let cakeName2 = [...cakeNames, 'salted carmel2']

//make a copy of an item from an array
let slice = cakeNames.slice(3,4)

//remove an item from an array
let splice = cakeNames.splice(3,1)

const logCakeFlavor = cake => console.log(cake.flavor)
const upCaseCake = cake => console.log(cake.flavor.toUpperCase())
const logPrice = cake => console.log(cake.price)
//const cakeLogger = cake => console.log(cake)

function forEveryCake(cakeArray, cakeAction){

    for(let cake of cakeArray){
        //How can we debug the loop by stopping the code in place?
        //console.log(cake)
        cakeAction(cake)
    }
}
forEveryCake(orders, logCakeFlavor)
//for every value in our array
//forEach will call this callback
//orders.forEach(logCakeFlavor)
//orders.forEach(cakeLogger)
orders.forEach(cake => console.log(cake))
orders.forEach(function(cake) {
    console.log(cake.size)
})

//for of
// can't be used on objects
// will give us the value of the index 
//[1,2,3]
//for in
//can be used on objects
//and will return the key
//when used on an array it gives us the index
const findCupCakesBleh = (cake) => {
    console.log(cake)
    if(cake.size === 'cup cake'){
        console.log('hi')
        return cake
    } else {
        return null
    }
}

const findCupCakes = cake => cake.size === 'cup cake'? cake : null
function findCake(array, test){
    let i = 0
    let result = null
    while(result == null && i < array.length){
        result = test(array[i])
        i++
    }
    return result
}

findCake(orders,findCupCakes)