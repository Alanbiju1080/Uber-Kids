const pickField = document.getElementById('upInput');

pickField.addEventListener('blur', () => {
  pickField.style.borderColor = 'black';
});

const desField = document.getElementById('desInput');

desField.addEventListener('blur', () => {
  desField.style.borderColor = 'black';
});

function scrollToDiv(box) {
  const element = document.getElementById(box);
  element.scrollIntoView({ behavior: 'smooth' });
}
