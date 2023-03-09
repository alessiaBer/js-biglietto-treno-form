/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

//assegno ad una variabile l'elemento input del DOM per il nome
const nameInput = document.getElementById('name');

//assegno ad una variabile l'elemento input del DOM per i km 
const kmInput = document.getElementById('km');

//assegno ad una variabile l'elemento input del DOM per l'età
const ageInput = document.getElementById('select');

//assegno il prezzo euro per km ad una variabile
const pricePerKm = 0.21;


//richiamo l'elemento button-submit dal DOM e lo assegno ad una variabile
const submit = document.getElementById('generate');

//assegno alla variabile un eventListener con un evento ed una funzione anonima
submit.addEventListener('click', function() {
    //assegno ad una variabile il "value" dell'input del nome
    const passengerName = nameInput.value;
    //assegno ad una variabile il "value" dell'input dei km
    const tripKm = kmInput.value;

    //assegno ad una variabile il "value" dell'input dell'età
    let passengerAge = ageInput.value;

    //loggo nella console il recap dei dati
    console.log(`Vuoi percorrere ${tripKm} km e sei ${passengerAge}`);

    //assegno ad una variabile il calcolo del prezzo totale
    let totalPrice = tripKm * pricePerKm;

    //dichiaro l'if statement per calcolare lo sconto in base all'età
    if (passengerAge === 'under_18') {
        //assegno al totalPrice uno sconto del 20% se il passeggero è minorenne
        const discount20 = totalPrice * 20 / 100;
        totalPrice -= discount20;
        console.log(`Al tuo biglietto è stato applicato uno sconto di € ${discount20.toFixed(2)}`);
    } else if (passengerAge === 'over_65') {
        //assegno al totalPrice uno sconto del 20% se il passeggero è over 65
        const discount40 = totalPrice * 40 / 100;
        totalPrice -= discount40;
        console.log(`Al tuo biglietto è stato applicato uno sconto di € ${discount40.toFixed(2)}`);
    }

    //assegno ad una variabile un nuovo Date()
    const today = new Date();

    //assegno ad una variabile il valore random che deve avere il cpCode
    const cpCode = Math.floor(Math.random() * 10000) + 1000;

    //richiamo l'elemento #card_container nel DOM e lo assegno ad una variabile
    const card = document.getElementById('card_container');
    //inserisco codice html tramite la proprietà .innerHTML
    card.innerHTML = 
    `<div class="card mt-5">
    <div class="card-header d-flex align-items-center">
        <img height="50px" src="./assets/css/British_Rail_-_colour_reversed_logo.svg.png">
        <h2 class="mb-0 ps-3">BRITISH RAILWAYS</h2>
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Ticket Type</th>
                    <th class="collapse d-md-table-cell" scope="col">Date</th>
                    <th scope="col">Price</th>
                    <th class="collapse d-md-table-cell" scope="col">CP code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${passengerName}</th>
                    <td>${passengerAge}</td>
                    <td class="collapse d-md-table-cell">${today.getDay()}/${today.getMonth()}/${today.getFullYear()}</td>
                    <td>€ ${totalPrice.toFixed(2)}</td>
                    <td class="collapse d-md-table-cell">${cpCode}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    //richiamo l'elemento #download_container del DOM e lo assegno ad una variabile
    const downloadBtn = document.getElementById('download_container');
    //inserisco codice html tramite la proprietà .innerHTML
    downloadBtn.innerHTML = `
    <button type="button" class="btn btn-light text-primary mt-3">
        <i class="fa-solid fa-download"></i>
        Download
    </button>`
})

//richiamo l'elemento button-reset dal DOM e lo assegno ad una variabile
const reset = document.getElementById('reset');
//assegno alla variabile un eventListener con un evento ed una funzione anonima
reset.addEventListener('click', function() {
    nameInput.value = "";
    kmInput.value = "";
})

