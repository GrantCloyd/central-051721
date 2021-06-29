// 

let cat = 'rose'
let num = 0
let bool = true
let un
//null

// let introduction = function(){
//     console.log('before return')
//      return `Thanks for tuning into the Flatiron Podcast`
//     console.log('after return')
// }
//Will run because of hoisting 
//console.log(introduction())
function introduction(){
     return `Thanks for tuning into the Flatiron Podcast`
}
//introduction reference 
//introduction() function call or invocation
let intro1 = `Thanks for tuning into the Flatiron Podcast`
let intro2 = `Welcome back to the Flatiron Podcast`

function introductionWithArgs(i1,i2) {
    console.log(i1)
    console.log(i2)
}
//introductionWithArgs(intro1,intro2)
// Will error because arrow functions do not have hoisting 
// console.log(guestAppearance())
//Arrow Function Syntax!
//One line implicit return
let guestAppearance = () => 'Welcome to the Flatiron Podcast, what is your name?'
// do not need () for a single param
let sayHi = name => `Hello, I'm ${name}, I'm happy to be here`
let sayBye = name => `Goodbye, I was ${name}, Thanks for having me`

function welcomeRose(guestIntro) {
    return guestIntro('rose')
}

function fullIntroduction(hostIntro, guestIntro, guestHi, name){
    console.log(hostIntro())
    console.log(guestIntro())
    console.log(guestHi(name))
}

//fullIntroduction(introduction, guestAppearance, sayHi, 'rose')
//Scope
//Host is in global scope
const host = 'Rose'
function recordShow(returnGuest){
    //epName is in Functional Scope
    const epName = 'Ep2. JavaScript Scope'

    if(returnGuest === true){
        //guest is in block scope
        let guest = 'Luke'
       return `${epName} with ${host} and a returning guest ${guest}`
    } else {
        return `${epName} with ${host}`
    }
}

const producer = 'David'
// Const 
// producer = 'ix'
// console.log(epName)

