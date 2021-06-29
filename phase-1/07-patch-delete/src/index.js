//setTimeout(() => console.log('hi'), 3000)
//Fetch calls
function getAnimals(){
    fetch('http://localhost:3000/animals')
    .then(res => res.json())
    .then(data => data.forEach(renderAnimal))
    .catch(error => console.error('Error:', error))
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
     .catch(error => console.error('Error:', error))
 }

 function updateAnimal(animal){
     console.log(animal.id)
     fetch(`http://localhost:3000/animals/${animal.id}`,{
         method: 'PATCH',
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(animal)
     })
     .catch(error => console.error('Error:', error))
     //Correction: you do not need .json() for a catch to work
 }

 function deleteAnimal(id){
     fetch(`http://localhost:3000/animals/${id}`,{
         method:'DELETE',
         headers:{
             'Content-Type':'application/json'
         }
     })
     .catch(error => console.error('Error:', error))
 }
 
 // Event Handlers *****************
 
 function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    let newAnimal = {
        name: e.target.name.value,
        imageUrl:e.target.image_url.value,
        description:e.target.description.value,
        donations: 0,
        funFacts: [],
    }
     createAnimal(newAnimal)
    
    
}
 // Event Listeners ****************
 
 document.querySelector('form').addEventListener('submit',handleSubmit)

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
     let factH4 = document.createElement('h4')
     let ul = document.createElement('ul')
  
     let btnDiv = document.createElement('div')
     let btnDonate = document.createElement('button')
     let btnDelete = document.createElement('button')
 
     // Add content
     li.id = animal.id
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
     factH4.textContent = 'Facts'
     animal.funFacts.forEach(factObj => {
         let li = document.createElement('li')
         li.textContent = factObj.fact
         ul.append(li)
     })

 
     // add btn Event Listeners
     btnDonate.addEventListener('click', () => {
         span.textContent = animal.donations += 10
         updateAnimal(animal)
     })
     btnDelete.addEventListener('click', () => {
         li.remove()
         deleteAnimal(animal.id)
    })
     
   
     // add content to the DOM
     pDescription.append(factH4, ul)
     pDonations.append(span)
     btnDiv.append(btnDonate, btnDelete)
     div.append(h4, pDonations, pDescription)
     li.append(img, div, btnDiv)
     document.querySelector('#animal-list').appendChild(li)
 }
 
 // Initial Render *************
 function initialize() {
     document.querySelector('#animal-list').innerHTML = ''
     getAnimals()
   
 }
  initialize()
 
 
