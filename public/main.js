const Rollbar = require("rollbar")

let llama = document.querySelector('img')

const helloAlert = evt => {
    alert('do you know the muffin man?')
}

llama.addEventListener('click', helloAlert)

let playAudio = document.querySelector('audio')

const audioAlert = evt => {
    
}

playAudio.addEventListener('click', audioAlert)

