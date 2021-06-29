let garfield = {
    name: "Garfield",
    breed: "Persian Tabby",
    introduce: function(){
        return `Meow, my name is Garfield and I'm a Persian Tabby.`
    }
}

let helloKitty = {
    name: "Hello Kitty",
    breed: "Cartoon",
    introduction: function(){
        return `Meow, my name is Hello Kitty and I'm a Cartoon.`
    }
}

let keyboardCat = {
    name: "Keyboard Cat",
    bread: "Yes",
    introduce: function(){
        return `Meow, my name is Keyboard Cat and I like Bread.`
    }
}

class Animal{
    constructor(name, age, color, breed){
        this.name = name
        this.age = age
        this.color = color
        this.breed = breed
        this.favFood = []
    }
    addFood(food){
        //this.favFood.push(food)
        this.favFood = [...this.favFood, food]
    }
}

class Dog extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color, breed)
        this.ball = 'red'
    }
    sayHi(){
        console.log(this)
        return `woof I\'m ${this.name}`
    }
    // addFood(){
    //     this.favFood = 'anything'
    // }

}

class Cat extends Animal{
  
    sayHi(){
        console.log(this)
        return `meow I\'m ${this.name}`
    }
   
    loopThroughFoods(){
        console.log(this.name)
        this.favFood.forEach(this.logFoods)
    }
    logFoods = (food) => {
        console.log(this.name)
        console.log(`${this.name} loves ${food}`)
    }
    
}

let rose = new Cat('rose', 9, 'black and white', 'domestic longhair')
let luke = new Cat('luke', 3, 'brown and white', 'domestic longhair')
let bowls = new Dog('bowls', 3, 'brown', 'German Shepherd')

// rose.addFood('fish')
// rose.addFood('plants')