let interval = 1000;

function nextCase(){
    let activeCase = document.querySelector('.rotator__case_active');
    activeCase.classList.remove('rotator__case_active')
    if(activeCase.nextElementSibling == null){
        activeCase = activeCase.parentElement.firstElementChild
        activeCase.classList.add('rotator__case_active')

    } else {
        activeCase = activeCase.nextElementSibling;
        activeCase.classList.add('rotator__case_active')
    }
    activeCase.style.color = activeCase.dataset.color;
    interval = activeCase.dataset.speed;
}

setInterval(nextCase, interval)