const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const body = document.body;

function switchMode(mode) {
  body.className = mode + '-mode';

  lightBtn.className = mode;
  darkBtn.className = mode;
}

lightBtn.addEventListener('click', () => switchMode('light'));
darkBtn.addEventListener('click', () => switchMode('dark'));