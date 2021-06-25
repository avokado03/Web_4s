const clean = (elemClass) => 
    document.getElementsByClassName(elemClass)[0].innerHTML = '';


// приветствие
window.onload = function(){
    let userName = localStorage.getItem('userName');
    setName(userName);
}

function hello(){
    let userName = prompt('Введите свое имя:', '').trim();
    if (setName(userName)){
        localStorage.setItem('userName', userName);
    }
}

function setName(name){
    let result = false;
    if (name != null && name != ''){
        document.getElementsByClassName('hello')[0].innerHTML = 'Привет, '+ name + '!';
        result = true;
    }
    return result;
}