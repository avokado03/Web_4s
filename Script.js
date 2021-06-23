const toggle = (el, className) => el.classList.toggle(className);

const toggleLab1 = () => 
    toggle(document.querySelector('div.lab1_con'), 'div_visible');
    
const toggleLab2 = () => 
    toggle(document.querySelector('div.lab2_con'), 'div_visible');


const clean = (elemClass) => 
    document.getElementsByClassName(elemClass)[0].innerHTML = '';