const btnContainer = document.querySelector('.account-container');
const hoverEffect = document.querySelector('.hoverEffect');


btnContainer.addEventListener('mouseenter', () => {

	hoverEffect.classList.add('large');
})

btnContainer.addEventListener('mouseleave', () => {

	hoverEffect.classList.remove('large');
})