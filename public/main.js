const Rollbar = require("rollbar")

let llama = document.querySelector('img')

const helloAlert = evt => {
    Rollbar.log('wanna see the muffin man?');
    alert('do you know the muffin man?')
}

llama.addEventListener('click', helloAlert)

let x = document.getElementById("myaudio");

function playAudio() {
    x.play();
}
