const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.colorValue');
const btn = document.getElementById('btn');


const flipHexColors = () => {
    let hexColor = '#';
 //hex color = 6 values
    for(let i = 0; i < 6; i++) hexColor += hex[getRandomNumber()];
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
}

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', flipHexColors);


