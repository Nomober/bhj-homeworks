const basket = document.querySelector('.cart__products');
const addButtons = [...document.getElementsByClassName('product__add')];
const productControl = [...document.getElementsByClassName('product__quantity-control')];
const values = [...document.getElementsByClassName('product__quantity-value')];
const productImage = [...document.getElementsByClassName('product__image')];

function addProductInBasket(id, source, count){
    basket.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src="${source}"><div class="cart__product-count">${count}</div></div>`);
}

productControl.forEach((el) => {
    el.addEventListener('click', () =>{
        if(el.classList.contains('product__quantity-control_inc')){
            values[index].textContent++
        } else if(values[index].textContent > 1){
            values[index].textContent--
        }
    })
})

addButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        const source = productImage[index].getAttribute('src')
        const count = values[index].textContent
        addProductInBasket(index + 1, source, count)
    })
});

