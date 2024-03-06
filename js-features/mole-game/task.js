const lost = document.getElementById("lost");
const dead = document.getElementById("dead");   

for (let i = 1; i < 9; i++){
    let hole = document.getElementById(`hole${i}`)
    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if(dead.textContent >= 10){
            alert('Вы выиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if(lost.textContent >= 5){
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
