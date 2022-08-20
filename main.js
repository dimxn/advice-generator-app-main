const advice = document.querySelector('#advice'),
    adviceText = document.querySelector('#adviceText'),
    getResult = document.querySelector('#getData');

function getAdvice() {
    advice.style.opacity = 0;
    adviceText.style.opacity = 0;
    fetch('	https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        adviceText.innerHTML = `“${Adviceobj.advice}”`;
        advice.innerHTML = `ADVICE #${Adviceobj.id}`;
        adviceText.style.opacity = 1;
        advice.style.opacity = 1;
    }).catch(error => {
        console.log(error);
    });
}

advice.style.opacity = 0;
adviceText.style.opacity = 0;
getResult.addEventListener('click', () => {
    advice.style.opacity = 0;
    adviceText.style.opacity = 0;
    getResult.disabled = true;
    getResult.classList.add("disabled");
    const f = setTimeout(() => {
        getResult.removeAttribute("disabled");
        getResult.classList.remove("disabled");
    }, 2000);
    getAdvice();
    getResult.classList.toggle('btn__roll');
});

window.onload = () => {
    getAdvice();
};
