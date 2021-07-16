//Data types
let cat = 'rose' //String
let num = 0 //Number
let bool = true //Boolean 
let und // Undefined
//null 

const intro1 = 'Welcome to the Flatiron Podcast'
const intro2 = 'Thanks for tuning to the Flatiron Podcast'

// mini program 
const introduction = function() {
   console.log('before return ')
   return `Thanks for tuning to the Flatiron Podcast`
   //Will not log
   console.log('after return')
}
// introduction reference 
// introduction() invocation
// return defines the output 
//What do you notice about the following?
let intro = introduction()
console.log(intro)

//Intro is a pram
//Is Hoisted
// console.log(playIntro(intro1))
// console.log(playIntro(intro2))
function playIntro(intro){
    return intro
}

//These strings are arguments
// console.log(playIntro("Welcome Back to the Flatiron PodCast"))
// console.log(playIntro("Thanks for tuning to the Flatiron Podcast"))

const guestAppearance = () => 'Welcome to the Flatiron podcast, what is your name????'

//Can NOT be hoisting
//console.log(sayHi('rose'))
const sayHi = name => `Hello, I'm ${name} happy to be here!`

//Functions can take other functions as arguments
// Higher Order Function
// Takes a function as an argument and/or returns a function as a value
// Callback function
// any function passed as an argument
function playFullIntroForRose(hostIntro, guestIntro, guestHi, name){
    //To use the function the stand in param must be invoked with ()
    console.log(hostIntro())
    console.log(guestIntro())
    console.log(guestHi(name))
}
//Functions do not need to be invoked when they are passed in as arguments
//playFullIntroForRose(introduction, guestAppearance, sayHi, 'rose')

//Scope
//What you see/use
//Where you can use it

//Global scope
let host = 'ted'

function recordShow(returnGuest){
    //Functional Scope
    let epName = 'ep1. Intro to JavaScript'

    if(returnGuest === true){
        //Block scope
        let guest = 'rose'
        console.log( `I'm ${host}, this is ${epName}, lets welcome back our ${guest}!`)
    } else {
        console.log( `I'm ${host}, this is ${epName}`)
    }

    console.log(guest)

}

const guest = 'Luke'

const producer = 'David'
// producer = 'ix'