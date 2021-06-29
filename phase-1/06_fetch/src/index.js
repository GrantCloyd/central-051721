// setTimeout(() => console.log('hi'), 3000)
// Fetch calls ***************************
function getAnimals(url) {
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))
}

function postAnimal(animal){
    fetch('http://localhost:3000/animals',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
    .then(res => res.json())
    .then(data => renderAnimal(data))
    .catch(error => console.error('POST Error: ', error))
}


// Event Handlers *****************
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    let animalObj = {
        name: e.target.name.value,
        imageUrl: e.target.image_url.value,
        description: e.target.description.value,
        donations: 0
    }
    //renderAnimal(animalObj)
    postAnimal(animalObj)
}

// Event Listeners ****************
document.querySelector('form').addEventListener('submit', handleSubmit)
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
    btnDonate.addEventListener('click', (e) => {
        e.stopPropagation() 
        span.textContent = animal.donations += 10
        console.log(e.target)
    })
    btnDelete.addEventListener('click', (e) => {
        e.stopPropagation() 
        li.remove()
    })
    
    li.addEventListener('click', () => {
        document.querySelector('#animal-list').innerHTML = ''
        getAnimals(`http://localhost:3000/animals/${animal.id}`)
        .then(data => renderAnimal(data))
    })
    // add content to the DOM
    pDonations.append(span)
    btnDiv.append(btnDonate, btnDelete)
    div.append(h4, pDonations, pDescription)
    li.append(img, div, btnDiv)
    document.querySelector('#animal-list').appendChild(li)
}
// With innerHTML
// function renderAnimalHTML(animal) {
//     let li = document.createElement('li')
//     li.className = 'card'
//     li.innerHTML = `
//     <img src="${animal.imageUrl}" alt="${animal.name}">
//     <div class="content">
//       <h4>${animal.name}</h4>
//       <p>
//         $<span class="donation-count">${animal.donations}</span> Donated
//       </p>
//       <p>${animal.description}</p>
//     </div>
//     <div class="buttons">
//       <button class="donate">Donate $10</button>
//       <button class="delete">Set Free</button>
//     </div>
//     `
//     li.querySelector('donate).addEventListener('click', (e) => {
//       span.textContent = animal.donations += 10
//     console.log(e.target)
// })
// li.querySelector('donate).addEventListener('click', (e) => {
//     console.log(e.target.parentNode.parentNode.remove())
//     li.remove()
// })
//     document.querySelector('#animal-list').appendChild(li)
// }


// Initial Render *************
function initialize() {
    document.querySelector('#animal-list').innerHTML = ''
    // animalData.forEach(renderAnimal)
    getAnimals('http://localhost:3000/animals')
    .then(data => data.forEach(renderAnimal))
}
initialize()


