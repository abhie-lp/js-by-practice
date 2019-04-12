window.addEventListener("keydown", e => {
    // Get the keycode of the key pressed
    // Search the audio element with the keycode
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${keyCode}"]`);
    if(!audio || !key) {
        return;
    }

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    key.addEventListener("audioend", function() {
        this.classList.remove("playing");
    })

    // Select all keys
    const keys = document.querySelectorAll("div.key");
    keys.forEach(key => key.addEventListener("transitionend", function() {
        key.classList.remove("playing");
    }))
    console.log(keys);
})