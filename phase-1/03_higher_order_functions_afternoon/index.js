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
function cakeFlavor(cake){
    console.log(cake.flavor)
}
function cakePrice(cake){
    return cake.price
}
//console.log(cakeFlavor(orders[0]))

//function that takes a function as an argument
const cakeAction = (cakeFunction,num) => cakeFunction(orders[num])
// function cakeAction(cakeFunction,num){
//     return cakeFunction(orders[num])
// }

//console.log(cakeAction(cakeFlavor,0))
//console.log(cakeAction(cakePrice,2))



// forEach ****************************************************
// Should loop through every item in an array and perform some action on every item in the array
// return undefined
function myForEach(myArray, myFunction){
    for(item of myArray){
        myFunction(item)
    }
}
//myForEach(orders,cakeFlavor)

// orders.forEach(cakeFlavor)
// orders.forEach(cake => console.log(cake.size))


// map ********************************************************
// Should loop through every item in an array
// it should take a transform function
// transform every item in the array
// should return a new array with all of the transformed items
const sale = cake => {
    cake.price = cake.price*.5
    return cake
}

function myMap(myArray, myFunction){
    let transformedArray = []
    for(item of myArray){
        // transformedArray = [...transformedArray, myFunction(item)]
        transformedArray.push(myFunction(item))
    }
    return transformedArray
}
//console.log(myMap(orders,sale))

//console.log(orders.map(sale))
// let key = "flavor"
// console.log(orders.map(item => item[key]))
//console.log(orders.map(item => item.flavor))


// find **********************************************************
// Should loop through every item in an array
// perform a test on every item in the array
// should return the FIRST item that returns true in the test
 const cupCake = cake => cake.size === 'cup cake'

function myFind(myArray, myFunction){
    for(item of myArray){
        if(myFunction(item)){
            return item
        }
    }
}
// console.log(myFind(orders,cupCake))
// console.log(orders.find(cupCake))
// console.log(orders.find(cake => cake.ingredients[0] === 'earl grey'))

// filter *********
//Should loop through every item in the array
//perform a test on every item
//Should return an array of items that returned true in the test
const pricey = cake => cake.price > 35

function myFilter(myArray, myFunction){
    let changedArray = []
    for(item of myArray){
        if(myFunction(item)){
            changedArray.push(item)
        }
    }
    return changedArray
}
// console.log(myFilter(orders,pricey))
// console.log(orders.filter(pricey))
// console.log(orders.filter(cake => cake.amount > 1))
//chaining and nesting 
console.log(orders.filter(item => item.ingredients.find(innerItem => innerItem === "earl grey")))
console.log(orders.map(item => item.ingredients).flat().forEach(item => console.log(item)))

//advanced params
function logAllIngredients(array){
    let allIngredientsArrays = array.map(item => item.ingredients)
    return allIngredientsArrays.flat().filter((value, indx, array) => {
        console.log(value)
        console.log('index: ', indx)
        console.log('index of: ', array.indexOf(value))
        array.indexOf(value) === indx
    })
}

logAllIngredients(orders)

