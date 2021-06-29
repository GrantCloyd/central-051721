let garfield = {
    name: "Garfield",
    breed: "Persian Tabby",
    introduce: function(){
        return `Meow, my name is Garfield and I'm a Persian Tabby.`
    }
}

// let helloKitty = {
//     name: "Hello Kitty",
//     breed: "Cartoon",
//     introduction: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon.`
//     }
// }

// let keyboardCat = {
//     name: "Keyboard Cat",
//     bread: "Yes",
//     introduce: function(){
//         return `Meow, my name is Keyboard Cat and I like Bread.`
//     }
// }

// let arr = [garfield, helloKitty, keyboardCat]
// arr.forEach(item => item.introduce())

class Animal {
    constructor(name, age, color, breed){
        this.name = name,
        this.age = age,
        this.color = color,
        this.breed = breed
    }
    sayHi(){
        return `Hi, I\'m ${this.name}`
    }
}

class Dog extends Animal{

}
let dog = new Dog('Rich', 12, 'Gold Brown', 'Pork-ie')

class Cat extends Animal{
    constructor(name, age, color, breed, toy){
        super(name, age, color, breed)
        this.toy = toy
        this.favFood = []
    }
    sayHi(){
        return `meow`
    }
  
    addFood(food){
        this.favFood = [...this.favFood, food]
    }
    loopThroughFoods(){
        console.log(this)
        this.favFood.forEach(this.logFoods)
    }
    logFoods = (food) => {
        console.log(this)
        console.log(`${this.name} loves ${food}`)
    }
    
}

let rose = new Cat('rose', 9, 'black and white', 'domestic longhair', 'box')
let roseDog = new Dog('rose', 9, 'black and white', 'domestic longhair')
let luke = new Cat('luke', 3, 'white and brown', 'domestic longhair')
rose.addFood('fish')
// console.log(rose)
// console.log(garfield)

