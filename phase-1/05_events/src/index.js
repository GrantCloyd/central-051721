// Event Handlers *****************
const handleSubmit = (e) => {
    // Prevents form refresh
    e.preventDefault()
    // user input
    let animalObj = {
        name: e.target.name.value,
        imageUrl: e.target.image_url.value,
        description: e.target.description.value,
        donations: 0
    }
    renderAnimal(animalObj)
}

// Event Listeners ****************
document.querySelector('form').addEventListener('submit', handleSubmit)


// Render *********************
const renderAnimal = function (animal) {
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
    // add btn Event Listeners
    btnDonate.addEventListener('click', (e) => {
        span.textContent = animal.donations += 10
        console.log(e.target)
    })
    btnDelete.addEventListener('click', (e) => {
        // console.log(e.target.parentNode.parentNode.remove())
        li.remove()
    })

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
    pDonations.append(span)
    btnDiv.append(btnDonate, btnDelete)
    div.append(h4, pDonations, pDescription)
    li.append(img, div, btnDiv)
    document.querySelector('#animal-list').appendChild(li)

}

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

//     document.querySelector('#animal-list').appendChild(li)
// }

// Initial Render *************
function initialize() {
    document.querySelector('#animal-list').innerHTML = ''
    animalData.forEach(renderAnimal)

    changeBtnColor()
    changeHeader()
}
initialize()
