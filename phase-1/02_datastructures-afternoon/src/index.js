// Array
//let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Plain Old JavaScript Object
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}
//Read values and keys from objects 
cakeOrder1["flavor"]
cakeOrder1.flavor
Object.keys(cakeOrder1)
Object.values(cakeOrder1)
Object.entries(cakeOrder1)

//Update values and keys from objects
cakeOrder1.price = 20.00
cakeOrder1["price"] = 30.00

//Create a new key
cakeOrder1.complete = true
cakeOrder1["refund"] = false

//pass by reference 
// let cakeOrder2 = cakeOrder1
let cakeOrder2 = {...cakeOrder1}

function loopThrough(){
    for(let key in cakeOrder1){
       console.log(key)
        console.log(cakeOrder1[key])
    }
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

let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Read items from arrays
cakeNames[1]
cakeNames[cakeNames.length-1]
let slice = cakeNames.slice(3,4)
//Updating items in my array
//cakeNames.push('Creme Brulee')
let splice = cakeNames.splice(3,1)
cakeNames2 = [...cakeNames, 'Creme Brulee']



//Loop through arrays and passing functions are arguments

//const logCake = (cake) => console.log(cake)
const logCakeFlavor = cake => console.log(cake.flavor)
const logCakePrice = cake => console.log(cake.price)
//Don't use bob as a param name
//This example is proving that params can be named anything
//They are function specific variables whose value will equal the argument passed to the function when called. 
const upCaseFlavor = bob => console.log(bob.flavor.toUpperCase())

function forEveryCake(cakeArray, cakeAction){
    for(let item of cakeArray){
        cakeAction(item)
    }
}
//forEveryCake(orders, logCake)
//forEveryCake(orders, logCakePrice)
orders.forEach(logCakeFlavor)
orders.forEach(cake => console.log(cake.flavor))
orders.forEach(function(bob){
    console.log(bob)
})