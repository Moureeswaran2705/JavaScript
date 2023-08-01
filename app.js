const textToChange = document.getElementById('text-to-change');
const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', changeTextColor);
function changeTextColor() {
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
textToChange.style.color = randomColor;
}
