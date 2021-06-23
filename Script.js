const toggle = (el, className) => el.classList.toggle(className);

const toggleLab1 = () => toggle(document.querySelector('div.lab1'), 'div_visible');
const toggleLab2 = () => toggle(document.querySelector('div.lab2'), 'div_visible');