window.addEventListener("load", function() {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector("div.visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3",
    ]

    // Add the event to all the pads to play the sound
    // forEach accepts 2nd optional parameter which the index of the array
    pads.forEach((pad, index) => pad.addEventListener("click", function() {
        sound = sounds[index]
        sound.currentTime = 0
        sound.play();
        createBubbles(index);
    }))


    const shapes = ["circle",
    "square",
    "triangle up",
    "triangle down",
    "triangle left",
    "triangle right"]

    // function to make bubble transitions
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        const shape = shapes[Math.floor(Math.random() * 6)];
        bubble.className += shape;
        visual.appendChild(bubble);
        if (shape == "square" || shape == "circle"){
            bubble.style.background = colors[index];
        } else {
            bubble.style.color = colors[index];
        }
        bubble.style.animation = "jump 1s ease";

        // Remove the element as soon as the animation is done
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
})