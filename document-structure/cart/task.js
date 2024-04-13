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
            el.previousElementSibling.textContent++
        } else if(el.nextElementSibling.textContent > 1){
            el.nextElementSibling.textContent--
        }
    })
})

addButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        const products = [...document.getElementsByClassName('cart__product')]
        const productInCard = products.find((e) => e.dataset.id == index+1)
        const source = productImage[index].getAttribute('src')
        const count = values[index].textContent
        if(productInCard) {
            productInCard.lastChild.textContent = parseInt(productInCard.lastChild.textContent) + parseInt(count)
        } else {
        addProductInBasket(index + 1, source, count)
        }   
        
    })
});

