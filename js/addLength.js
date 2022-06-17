let moveLeft = 0;
let answer = document.getElementsByClassName("answer");
let progressComplete = document.getElementsByClassName("progress");
let progressView = document.getElementsByClassName("sprogressView");

function addLength() {
    moveLeft += 6.25;
    progressView.style.margin = "10px";
    progressComplete.innerHTML.style.width = "100px";
};