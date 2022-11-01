/* Acessando os itens*/
const btn = document.getElementById('nav-btn-pt');
const title = document.getElementById('nav-name');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';
const lightModeText = 'Claro';
const darkModeText = 'Escuro';

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    if(btn.classList.contains(darkModeClass)) {
        btn.innerHTML = lightModeText;
        btn.style.color = '#000';
        btn.style.backgroundColor = '#fff'
    }else {
        btn.innerHTML = darkModeText;
        btn.style.color = '#fff';
        btn.style.backgroundColor = '#000'
    }
}

function changeMode() {
    changeClasses();
    changeText();
}

btn.addEventListener('click', changeMode);

