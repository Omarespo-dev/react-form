// Importo usesState
import { useState } from "react"

// array di lista di articoli
const articles = [
    "Come imparare React in 7 giorni",
    "Guida completa a JavaScript moderno",
    "CSS avanzato: Flexbox e Grid",
    "Introduzione a Node.js per principianti",
    "10 consigli per ottimizzare le prestazioni del tuo sito web",
];
  
  

export default function Main() {
    // articles Contiene l'array di articoli.------ setArticles È una funzione che permette di aggiornare lo stato. ---- useState() Gestisce lo stato
    const [listTitle, setListTitle] = useState(articles)

    // Nuovo stato con stringa vuota dove si andranno ad aggiungere gli elementi che inserira l utente
    const [newlistTitle, newSetListTitle] = useState("")


    // 1) Aggiungo input di tipo text con il valore che corrispodnde a listTitle e gli metto onChange → È un evento di React che si attiva ogni volta che il valore di un campo <input> cambia (ad esempio, quando l’utente digita qualcosa).


    // 2) Per gestire piu input lo facciamo con il Form quindi come seconda parte aggiungo il form con onSubmit reagisce al click di un button o anche dell invio della tastiera e in qeusto esempio lo vediamo sulla console ---- Poi ho aggiungo anche il button Invia 
    const handleSubmit = event => {
        
        // no fa ricaricare la pagina all invio 
        event.preventDefault();

        // Facciamo la copia dell array di stringhe 
        const copiaLista= [...listTitle, newlistTitle];
        // e aggiorno anche lo stato
        setListTitle(copiaLista)

        // Test per vedere se stampa qualsiasi cosa nell campo form
        console.log('Il nome inviato è:' + copiaLista)
    }

    
    // 3) Ho fatto  un array di stringhe dove lo vado a mettere nel <ul> facendo il map --- Poi aggiungo il button elimina a li

    // 4) Abbiamo questo array di stringhe ma vogliamo che al click del button INVIA aggiunge una altra lista compilata dal input
    // -Per farlo bisogna creare uno useState vuoto dove all interno andranno gli elementi che aggiunge l utente
    
    return (<>
        {/* PARTE GESTIONE DEL FORM */}

        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={e => { newSetListTitle(e.target.value) }}
            />
            <button>INVIA</button>
        </form>
        
        {/* PARTE GESTIONE DELLA LISTA  */}
        <ul>
            {listTitle.map((list, i) => <li key={i}>{list}
            <button>-</button>
            </li>)}
            
        </ul>
    </>)
}