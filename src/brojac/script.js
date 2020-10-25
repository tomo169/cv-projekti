const daniEl = document.getElementById("dana");
const satiEl = document.getElementById("sati");
const minuteEl = document.getElementById("minuta");
const sekundeEl = document.getElementById("sekunda");

const novaGodina = "1 Jan 2021";

function brojac() {
    const datNoveGod = new Date(novaGodina);
    const trenutacniDat = new Date();

    const ukSek = (datNoveGod - trenutacniDat) / 1000;

    const dana = Math.floor(ukSek / 3600 / 24);
    const sati = Math.floor(ukSek /3600 ) % 24;
    const minuta= Math.floor(ukSek /60) % 60;
    const sekunda= Math.floor(ukSek) % 60;

    daniEl.innerHTML = dana;
    satiEl.innerHTML = formatTime(sati);
    minuteEl.innerHTML = formatTime(minuta);
    sekundeEl.innerHTML = formatTime(sekunda);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

brojac();

setInterval(brojac, 1000);