window.addEventListener('scroll', fadeArrow);

function fadeArrow() {
    let fadeArrowDown = document.querySelector('#arrow-down')
    
    if (scrollY > 50) {
        fadeArrowDown.classList.add('fade');
    } else {
        fadeArrowDown.classList.remove('fade');
    }
}
