const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()
xhr.addEventListener('readystatechange', (e) => {
    if(xhr.readyState === xhr.DONE){
        const poll = JSON.parse(xhr.responseText);
        const pollId = poll.id;
        const pollTitle = poll.data.title;
        const pollAnswers = poll.data.answers; 

        title.textContent = pollTitle;

        for (const answer of pollAnswers) {
            answers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
            ${answer}
          </button>`)
        } 

        const buttons = [...document.querySelectorAll('button')]

        for (const [i, btn] of buttons.entries()) {
            btn.addEventListener('click', (e) => {
                e.preventDefault()

                alert("Спасибо, ваш голос засчитан!");

                const xhrResult = new XMLHttpRequest();

                xhrResult.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', );
                xhrResult.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
                xhrResult.send( `vote=${pollId}&answer=${i}` );
            })
        }
        
    }
})

