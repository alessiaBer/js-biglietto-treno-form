/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica ma usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console */
//assegno ad una variabile l'elemento input del DOM per il nome
const nameInput = document.getElementById('name');

//assegno ad una variabile l'elemento input del DOM per i km 
const kmInput = document.getElementById('km');

//assegno ad una variabile l'elemento input del DOM per l'età
const ageInput = document.getElementById('select');

//assegno il prezzo euro per km ad una variabile
const pricePerKm = 0.21;


//richiamo l'elemento button dal DOM e lo assegno ad una variabile
const submit = document.querySelector('button');

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

    console.log(`Il prezzo finale del tuo biglietto è di € ${totalPrice.toFixed(2)}`);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const row = document.getElementById('card_container');

    row.innerHTML = 
    `<div class="card mt-5">
    <div class="card-header">
        <img height="50px" src="https://creativereview.imgix.net/content/uploads/2011/03/BritishRailSymbol.jpg?auto=compress,format&q=60&w=300&h=210">
        <h2 class="d-inline-block">BRITISH RAIL</h2>
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Ticket Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">CP code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${passengerName}</th>
                    <td>${passengerAge}</td>
                    <td>${today.getUTCDate()}</td>
                    <td>€ ${totalPrice.toFixed(2)}</td>
                    <td>//mathrandom</td>
                </tr>
            </tbody>
        </table>
    </div>`;
})

/* MILESTONE 2:
Realizzare un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati inseriti e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). */

