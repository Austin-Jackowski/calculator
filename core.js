/*
Calculator webapp
*/

// VARIABLES

const buttonList = document.querySelectorAll('button')
const topScreen = document.querySelector('#top-half')
const bottomScreen = document.querySelector('#bottom-half')

// EVENT LISTENERS

buttonList.forEach((button) => button.addEventListener('click', e => {

  if (e.target.value === '=') {
    //some function that displays result
    bottomScreen.textContent = 'result'
    topScreen.textContent += ''
  } else if (e.target.value === 'clear') {
    bottomScreen.textContent = ''
    topScreen.textContent = ''
  } else {
    bottomScreen.textContent += e.target.value
    topScreen.textContent += e.target.value
  }
}))

// FUNCTIONS

function addition(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

const operate = function(operator, a, b) {
  if (operator === '+') return addition(a, b)
  else if (operator === '-') return subtract(a, b)
  else if (operator === '*') return multiply(a, b)
  else if (operator === '/') return divide(a, b)
}
