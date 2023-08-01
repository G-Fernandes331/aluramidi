function playSound (selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element && element.localName === 'audio') {
            element.play();   
    } else {
        alert('Foi nao paizao...');
    }

}

const keyList = document.querySelectorAll('.tecla');

for (counter = 0; counter < keyList.length; counter++) {
    const key = keyList[counter];
    const instrumento = key.classList[1];
    const idAudio = `#som_${instrumento}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (event) {
        
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }

        key.onkeyup = function () {
            key.classList.remove('ativa');
        }
    }
        
}