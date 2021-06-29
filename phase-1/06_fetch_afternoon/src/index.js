//setTimeout(() => console.log('hi'), 3000)
//Fetch calls
function getAnimals(){
   fetch('http://localhost:3000/animals')
   .then(res => res.json())
   .then(data => data.forEach(renderAnimal))
   .catch(error => console.error('Error:', error))
   //Get animal card on the dom
   //Get animals [x]
   //one animal but I have an array of animals???
   //loop through my array and look at one animal
   //Render animal to the dom
   // Do I need to write this?
   // no I have renderAnimals 
   console.log('hi after fetch')
}

function createAnimal(newAnimal){
    fetch('http://localhost:3000/animals',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newAnimal)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //pessimistic
        renderAnimal(data)
    })
}

// Event Handlers *****************


// Event Listeners ****************
// Select the form
// Add an event listener
// Pass the event listener a callback
// have that callback prevent the refresh
// build a new animal object

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(e)
    let newAnimal = {
        name: e.target.name.value,
        imageUrl:e.target.image_url.value,
        description:e.target.description.value,
        donations: 0
    }
    //optimistic 
    //renderAnimal(newAnimal)
    createAnimal(newAnimal)
})
// render an animal
// {
//     "id": 1,
//     "name": "Pangolin",
//     "imageUrl": "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
//     "description": "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
//     "donations": 0
//   }

// Render *********************
const renderAnimal = function (animal) { 
    // Create Elements
    let li = document.createElement('li')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let h4 = document.createElement('h4')
    let pDonations = document.createElement('p')
    let span = document.createElement('span')
    let pDescription = document.createElement('p')
    let btnDiv = document.createElement('div')
    let btnDonate = document.createElement('button')
    let btnDelete = document.createElement('button')

    // Add content
    btnDiv.className = 'buttons'
    btnDonate.textContent = `Donate $10`
    btnDelete.textContent = `Set Free`
    span.className = 'donation-count'
    pDescription.textContent = animal.description
    pDonations.textContent = '$'
    span.textContent = `${
        animal.donations
    } Donated `
    h4.textContent = animal.name
    img.src = animal.imageUrl
    li.className = 'card'
    div.className = 'content'

    // add btn Event Listeners
    btnDonate.addEventListener('click', (e) => span.textContent = animal.donations += 10)
    btnDelete.addEventListener('click', (e) =>  li.remove())
    
  
    // add content to the DOM
    pDonations.append(span)
    btnDiv.append(btnDonate, btnDelete)
    div.append(h4, pDonations, pDescription)
    li.append(img, div, btnDiv)
    document.querySelector('#animal-list').appendChild(li)
}

// Initial Render *************
function initialize() {
    document.querySelector('#animal-list').innerHTML = ''
    //animalData.forEach(renderAnimal)
    getAnimals()
  
}
 initialize()

