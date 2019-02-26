/*
Calculator webapp
*/

// VARIABLES

const buttonList = document.querySelectorAll('button')
const buttons = {}

// For each button in buttonList populate buttons object
buttonList.forEach((button) => { buttons[button.id] = button.value })

// FUNCTIONS

// EVENT LISTENERS
