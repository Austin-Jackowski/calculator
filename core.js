/*
Calculator webapp
*/

// VARIABLES

const buttonList = document.querySelectorAll('button')
const topScreen = document.querySelector('#top-half')
const bottomScreen = document.querySelector('#bottom-half')
let operationArray = []
const allOperators = document.querySelectorAll('.operator')

// EVENT LISTENERS

buttonList.forEach((button) => button.addEventListener('click', display))

// FUNCTIONS

function display(e) {
  if (e.target.value === '=') {
    // Some function that displays result
    let result = eval(operationArray.join(''))
    bottomScreen.textContent = `${result}`
    topScreen.textContent = result
  } else if (e.target.value === 'clear') {
    bottomScreen.textContent = ''
    topScreen.textContent = ''
    operationArray = []
  } else {
    if (e.target.classList.contains('operator')) {
      bottomScreen.textContent += e.target.value
      topScreen.textContent += e.target.value
      operationArray.push(e.target.value)
      allOperators.forEach(elem => {
        elem.disabled = true
      })
    } else {
      bottomScreen.textContent += e.target.value
      topScreen.textContent += e.target.value
      operationArray.push(e.target.value)
      allOperators.forEach(elem => {
        elem.disabled = false
      })
    }
  }
}
