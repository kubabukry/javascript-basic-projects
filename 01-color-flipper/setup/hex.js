const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnElem = document.querySelector('.btn-hero');
const spanElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');

bodyElem.style.background = spanElem.textContent;

btnElem.addEventListener('click', function () {
    let randomColor = generateRandomColor();
    bodyElem.style.background = randomColor;
    spanElem.textContent = randomColor;
});


function generateRandomColor () {
    let hexString = '';
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    const toHex = (c) =>  {
        let hexNumber = '';
        let quotient = c;
        if(c === 0){
            return '0';
        }
        while(quotient > 0){
            let remainder = quotient % 16;
            hexNumber = hex[remainder] + hexNumber;
            quotient = Math.floor(quotient / 16);
        }
        return hexNumber;
    }
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}