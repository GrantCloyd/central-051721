console.log(animalData)

//Render ***********
function renderOneAnimalInDOM(animal){
    console.log(animal)
    console.log(document.querySelector('.card'))
    document.querySelector('img').src = animal.imageUrl
    document.querySelector('h4').textContent = animal.name
    document.querySelector('span').textContent = animal.donations
    document.querySelector('p').textContent = animal.description
    document.querySelector('#donate').textContent = 'Donate $10'
    document.getElementById('delete').textContent = 'Delete'
}
//There are cleaner, dryer ways to do this
//Try refactoring it to be shorter
function renderOneAnimal(animal){
    //create elements
    let li = document.createElement('li')
    let divContent = document.createElement('div')
    let divButtons = document.createElement('div')
    let h4 = document.createElement('h4')
    let img = document.createElement('img')
    let pSpan = document.createElement('p')
    let span = document.createElement('span')
    let p = document.createElement('p')
    let btnDonate = document.createElement('button')
    let btnDelete = document.createElement('button')
    //Add content 
    li.className = 'card'
    divContent.className = 'content'
    divButtons.className = 'buttons'
    h4.textContent = animal.name
    img.src = animal.imageUrl
    pSpan.textContent = 'Donated $'
    span.textContent = animal.donations
    p.textContent = animal.description
    btnDonate.className = 'donate'
    btnDonate.textContent = 'Donate $10'
    btnDelete.className = 'delete'
    btnDelete.textContent = 'Set Free'
    //Add items to dom
    pSpan.append(span)
    divContent.append(h4,pSpan,p)
    divButtons.append(btnDonate,btnDelete)
    li.append(img,divContent,divButtons)
    document.querySelector('#animal-list').appendChild(li)
}

//Be cautious
//Only use innerHTML if you know where your data is coming from 
//OR sanitize your data (Look up sanitization for a great Blog Topic idea!)
function renderOneAnimalFromAnimalDataInnerHTML(animal){
    let li = document.createElement('li')
    li.className = 'card'
    li.innerHTML = `
    <img src="${animal.imageUrl}" alt="${animal.imageUrl}">
    <div class="content">
      <h4>${animal.name}</h4>
      <p>
        $<span class="donation-count">${animal.donations}</span> Donated
      </p>
      <p>${animal.description}</p>
    </div>
    <div class="buttons">
      <button id="donate"></button>
      <button id="delete"></button>
    </div>
    `
    document.querySelector('#animal-list').appendChild(li)
}

//update my header
function changeHeading(){
    document.querySelector('h1').textContent = 'Welcome to Zoo Keeper Project'

}
//update btn color
function changeButtonColor(){
    console.log(document.querySelectorAll('button').forEach(element => element.style.background = 'blue'))
}


//Initial Render 
function initialize(){
    //renderOneAnimalInDOM(animalData[0])
    document.querySelector('#animal-list').innerHTML = ''
    animalData.forEach(renderOneAnimalFromAnimalDataInnerHTML)
    
    changeHeading()
    changeButtonColor()
}
initialize()
//Array From
//Array from will take array like objects and turn them into Arrays
const divs = document.getElementsByTagName('div')
console.log(Array.from(document.getElementsByTagName('div')).map(item => {
    return item
}))