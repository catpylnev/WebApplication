// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

const video = document.getElementById("video");
const animateButton = document.getElementById("animate-button");

function animateVideo() {
    let rotation = 0;
    const interval = setInterval(() => {
        rotation += 5;
        video.style.transform = `rotate(${rotation}deg)`;
        if (rotation >= 360) {
            clearInterval(interval);
        }
    }, 50);
}

animateButton.addEventListener("click", animateVideo);
