/*
Calculator webapp
*/

// VARIABLES

const buttonList = document.querySelectorAll('button')
const buttons = {}

// For each button in buttonList populate buttons object
buttonList.forEach((e) => { buttons[e.id] = e.value })

// FUNCTIONS

// EVENT LISTENERS
