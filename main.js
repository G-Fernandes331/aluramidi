function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

let counter = 0;

for (counter = 0; counter < keyList.length; counter++) {
    const key = keyList[counter];
    const instrumento = key.classList[1];
// \/ \/ \/ Template String \/ \/ \/
    const idAudio = `#som_${instrumento}`;

    key.onclick = function () {
        playSound(idAudio);
    }

}