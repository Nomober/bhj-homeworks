const itemList = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
  
        let valutes = JSON.parse(xhr.responseText).response.Valute;
          
        for (let key in valutes){
            itemList.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">
                    ${valutes[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${valutes[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
        `)
        }
    }
})

