/* Acessando os itens*/
const btn = document.getElementById('nav-btn');
const title = document.getElementById('nav-name');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';
const lightModeText = 'Light';
const darkModeText = 'Dark';

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    if(btn.classList.contains(darkModeClass)) {
        btn.innerHTML = lightModeText;
    }else {
        btn.innerHTML = darkModeText;
    }
}

function changeMode() {
    changeClasses();
    changeText();
}

btn.addEventListener('click', changeMode);

