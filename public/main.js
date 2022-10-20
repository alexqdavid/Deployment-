
let llama = document.querySelector('img')

const helloAlert = evt => {
    alert('do you know the muffin man?')
}

llama.addEventListener('click', helloAlert)

let song = document.querySelector('audio')

function playAudio() {
    song.play();
}

song.addEventListener('click',playAudio)


