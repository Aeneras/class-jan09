let changeBackground = true;
let background = null;

background = document.querySelector("#gradient-colorful");

function gradientBackground() {
  if (changeBackground) {
    calculateBackground();
    setTimeout(gradientBackground, 2000);
  }
}
gradientBackground();

function calculateBackground() {
  let g = 100 + Math.floor(Math.random() * 155 + 1);
  let r = Math.floor(Math.random() * 200 + 1);
  background.style.backgroundColor =
    "#" + r.toString(16) + g.toString(16) + "ff";
}
