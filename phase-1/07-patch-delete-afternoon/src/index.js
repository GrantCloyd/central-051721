//setTimeout(() => console.log('hi'), 3000)
//Fetch calls
function getAnimals(){
    fetch('http://localhost:3000/animals')
    .then(res => res.json())
    .then(data => {
        data.forEach(renderAnimal)})
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
     fetch(`http://localhost:3000/animals/${animal.id}`,{
        method: 'PATCH', 
        headers:{
            'Content-Type':'application/json'
         },
        body:JSON.stringify({donations: animal.donations})
        //body:JSON.stringify(animal) 
     })
 }

 function deleteAnimal(id){
     fetch(`http://localhost:3000/animals/${id}`,{
         method:'DELETE',
         header:{
             'Content-Type': 'application/json'
         }
     })
     .then(() => document.getElementById(id).remove())
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
 // Dig into our animal to get the funFacts
 // loop through funFacts
 // create an element for the fact
 // put the fact on the element 
 // append the element to the card
 const renderAnimal = function (animal) { 
     //console.log(animal.funFacts)
     // Create Elements
     let li = document.createElement('li')
     let img = document.createElement('img')
     let div = document.createElement('div')
     let h4 = document.createElement('h4')
     let pDonations = document.createElement('p')
     let span = document.createElement('span')
     let pDescription = document.createElement('p')
     let factH4 = document.createElement('h4')
  
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
     pDescription.append(factH4)
     animal.funFacts.forEach(factObj => {
         let p = document.createElement('p')
         p.textContent = factObj.fact
         //console.log(p)
         pDescription.append(p)
     })
  

 
     // add btn Event Listeners
     btnDonate.addEventListener('click', () => {
         console.log(animal)
         animal.donations = animal.donations +10
         span.textContent = animal.donations 
         updateAnimal(animal)
      
     })
     btnDelete.addEventListener('click', () => {
         deleteAnimal(animal.id)
    })
     
   
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
     getAnimals()
   
 }
  initialize()
 
 

