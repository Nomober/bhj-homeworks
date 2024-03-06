let timer = document.getElementById('timer');
const fireworks = document.getElementById('fireworks');

const contest = setInterval(()=>{
    timer.textContent--
    if (timer.textContent == 0){
        clearInterval(contest)
        window.location.href = 'https://royallib.com/get/fb2/chehov_anton/beseda_pyanogo_s_trezvim_chyortom.zip'
        alert('Вы победили в конкурсе!')
    }
},1000)