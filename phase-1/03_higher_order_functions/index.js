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
// review return values **************************************
const cakeFlavor = cake => cake.flavor
const cakePrice = cake =>  cake.price
const cakeAction = (func,num) =>  func(orders[num])
console.log(cakeFlavor(orders[0]))
console.log(cakeAction(cakeFlavor,2))
console.log(cakeAction(cakePrice,1))

// forEach ****************************************************
// Should loop through every item in an array and perform some action on every item in the array
// return undefined

const consoleElem = element => console.log(element)

function myForEach(array, action){
    for(elem of array){
        action(elem)
    }
}
// Our forEach
myForEach(orders, consoleElem)
// Built in forEach
orders.forEach(consoleElem)
orders.forEach(element => {
    console.log(`price: $ ${element.price}  size: ${element.size}`)
    console.log(element.flavor)
})

// map ********************************************************
// Should loop through every item in an array
// it should take a transform function
// transform every item in the array
// should return a new array with all of the transformed items
function getFlavors(order){
    return order.flavor
}

function myMap(array, transformAction){
    let newArray = []
    for(elem of array){
        newArray = [...newArray, transformAction(elem)]
    }
    return newArray
}

//Our mao
console.log(myMap(orders, getFlavors))
//Built in map
console.log(orders.map(getFlavors))
console.log(orders.map(item => {
    item.price = item.price/2
    return item
}))


// find
// Should loop through every item in an array
// perform a test on every item in the array
// should return the FIRST item that returns true in the test

const findCupCakes = item => item.size === 'cup cake'

function myFind(ordersArray, test){
    for(item of ordersArray){
        if(test(item) === true){
            return item
        }
    }
}
// Our find
console.log(myFind(orders,findCupCakes))
// Build in find
console.log(orders.find(item => item.price > 40))
console.log(orders.find(item => item.flavor === 'fish'))

//filter
//Should loop through every item in the array
//perform a test on every item
//Should return an array of items that returned true in the test

const findAmount = item => item.amount === 1

function myFilter(array, test){
    let newArray = []
    for(value of array){
        if(test(value) === true){
            newArray.push(value)
        }
    }
    return newArray
}

// Our filter
console.log(myFilter(orders,findAmount))
// Built in filter
console.log(orders.filter(findAmount))
console.log(orders.filter(item => item.price === 40))
console.log(orders.filter(item => item.price < 40))
console.log(orders.filter(item => item.price > 40))

// reduce
// should loop through every item in an array
// should have an accumulator that is passed to every iteration
// perform some action involving the accumulator that will result in a
// single value

const cakeReducer = (accumulator, currentVal) =>  accumulator + currentVal.price
const allFlavorsOrdered = (accumulator, currentVal) => accumulator + ` ${currentVal.flavor}`

const allSizesOrdered = (accumulator, currentVal) => {
    console.log(accumulator)
    console.log(currentVal)
    return accumulator + currentVal.size
}


function myReduce(array, reduceAction, starterVal){
    let accumulator = starterVal
    for(item of array){
        console.log('accumulator', accumulator)
        accumulator = reduceAction(accumulator, item)
    }
    return accumulator
}
// Our reduce
console.log(myReduce(orders, cakeReducer, 1))
//Built in reduce
console.log(orders.reduce(cakeReducer, 1))
console.log(orders.reduce(allFlavorsOrdered, ''))
console.log(orders.reduce(allSizesOrdered, '!'))


orders.filter(item => item.ingredients.find(item => item === "eggs"))