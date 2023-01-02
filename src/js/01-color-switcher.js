const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStoptBtn);
console.dir(refs.startBtn);
function onClickStartBtn() {
  timerId = setInterval(() => {
    onBodyColor();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}
function onClickStoptBtn() {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBodyColor() {
  const randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
}
