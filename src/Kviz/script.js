const bazaPitanja = [
    {
        pitanje: "Tko je pojeo baku u jednoj od najpoznatijih bajki Crvenkapica?",
        a: "Slon",
        b: "Žirafa",
        c: "Majmun",
        d: "Vuk",
        tocniO: "d",
    },
    {
        pitanje: "Tko od navedenih moze pobijediti Jacques Houdeka u klackanju?",
        a: "Buba Coreli",
        b: "Chuck Noris",
        c: "Donald Trump",
        d: "Vladimir Putin",
        tocniO: "b",
    },
    {
        pitanje: "A tko je pojeo maloga Juju?",
        a: "Krokodil",
        b: "T-Rex",
        c: "Vanzemaljac",
        d: "Piton",
        tocniO: "a",
    },
    {
        pitanje: "Pronađite uljeza?",
        a: "React",
        b: "HTML",
        c: "Vue",
        d: "Angular",
        tocniO: "b",
    },
];

const kviz = document.getElementById("kviz");
const odgovorEls = document.querySelectorAll(".odgovor");
const pitanjaEl = document.getElementById("pitanja");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let trenutacnikviz = 0;
let rez = 0;

pokrenikviz();

function pokrenikviz() {
    ponistiOdgovor();

    const trenutacnikvizData = bazaPitanja[trenutacnikviz];

    pitanjaEl.innerText = trenutacnikvizData.pitanje;
    a_text.innerText = trenutacnikvizData.a;
    b_text.innerText = trenutacnikvizData.b;
    c_text.innerText = trenutacnikvizData.c;
    d_text.innerText = trenutacnikvizData.d;
}

function odaberi() {
    let odgovor = undefined;

    odgovorEls.forEach((odgovorel) => {
        if (odgovorel.checked) {
            odgovor = odgovorel.id;
        }
    });

    return odgovor;
}

function ponistiOdgovor() {
    odgovorEls.forEach((odgovorel) => {
        odgovorel.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the odgovor
    const odgovor = odaberi();

    if (odgovor) {
        if (odgovor === bazaPitanja[trenutacnikviz].tocniO) {
            rez++;
        }

        trenutacnikviz++;
        if (trenutacnikviz < bazaPitanja.length) {
            pokrenikviz();
        } else {
            kviz.innerHTML = `
                <h2>Tocno ste odgovorili ${rez}/${bazaPitanja.length} pitanja.</h2>
                
                <button onclick="location.reload()">Ponovi</button>
            `;
        }
    }
});
