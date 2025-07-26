const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnElem = document.querySelector('.btn-hero');
const spanElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');

btnElem.addEventListener('click', function (e) {
    let randomNum = Math.floor(Math.random() * 4);
    let color = colors[randomNum];
    bodyElem.style.background = color;
    spanElem.textContent = color;
});

