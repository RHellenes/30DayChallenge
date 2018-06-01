
const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('mousedown', () => {
  nextButton.classList.add('next-btn-click');
});

nextButton.addEventListener('mouseup', () => {
  nextButton.classList.remove('next-btn-click');
});