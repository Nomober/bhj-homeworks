const button = document.querySelector('.dropdown__value');
const items = Array.from(document.getElementsByClassName('dropdown__item'));
const list = document.querySelector('.dropdown__list')
button.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', event => {
        event.preventDefault();
        button.textContent = event.target.textContent;
        list.classList.remove('dropdown__list_active');
    })
}
