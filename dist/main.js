
let video = document.getElementById("video");
let btn = document.getElementById("btn");
let active = 0;

// this function  pause the anime video by clicking on button and play the video once click on the button again
btn.addEventListener('click', () => {
    if (active == 0) {
        video.pause();
        active = 1;
    } else {
        video.play();
        active = 0;
    }
});