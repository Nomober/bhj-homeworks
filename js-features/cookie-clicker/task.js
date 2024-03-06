let counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let speed = document.getElementById('clicker__speed');
let time = new Date();

cookie.onclick = () => {
    let date = new Date()
    cookie.width = 300;
    counter.textContent++
    setTimeout(()=>{cookie.width = 200}, 100)
    const currentTime = new Date();
    speed.textContent = (1000/(currentTime - time)).toFixed(3)
    time = currentTime;
}