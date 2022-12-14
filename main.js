


console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

// const baseURL = 

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

const baseURL = `http://localhost:4000`


function getAllChars(){
  clearCharacters()
  axios.get(`${baseURL}/characters`)
  .then(function(res){
    //returns a promise that we are calling res
    //loop-over res and call the createChar on each element in the array

    for(let i = 0; i< res.data.length; i++){
      createCharacterCard(res.data[i])
    }
  })
  .catch(error =>console.group(error))
}

getAllBtn.addEventListener('click',getAllChars)


function getOneChar(){
  clearCharacters()

  console.log(event.target)
  axios.get(`${baseURL}/character/`)

}

// for(let i=0; i < charBtns.length; i++){

// }