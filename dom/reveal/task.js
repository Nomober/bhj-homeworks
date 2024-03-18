function makeVisible(){
    const content = document.querySelectorAll('.reveal');
    content.forEach(item => {
        if (item.getBoundingClientRect().bottom < 0 || item.getBoundingClientRect().top > window.innerHeight){
            item.classList.remove('reveal_active')
        } else {
        item.classList.add('reveal_active')
        }
    })
}

document.addEventListener('scroll', makeVisible)