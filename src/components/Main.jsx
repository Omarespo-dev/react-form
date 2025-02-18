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




    // 1) Aggiungo input di tipo text con il valore che corrispodnde a listTitle e gli metto onChange → È un evento di React che si attiva ogni volta che il valore di un campo <input> cambia (ad esempio, quando l’utente digita qualcosa).


    // 2) Per gestire piu input lo facciamo con il Form quindi come seconda parte aggiungo il form con onSubmit reagisce al click di un button o anche dell invio della tastiera e in qeusto esempio lo vediamo sulla console ---- Poi ho aggiungo anche il button Invia 
    const handleSubmit = event => {
        
        // no fa ricaricare la pagina all invio 
        event.preventDefault();

        console.log('Il nome inviato è:' + listTitle)
    }

    // 3) Ho fatto  un array di stringhe dove lo vado a mettere nel <ul> facendo il map --- Poi aggiungo il button elimina a li
    
    return (<>
        {/* PARTE GESTIONE DEL FORM */}

        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={e => { setListTitle(e.target.value) }}
            />
            <button>INVIA</button>
        </form>
        
        {/* PARTE GESTIONE DELLA LISTA  */}
        <ul>
            {articles.map((article, i) => <li key={i}>{article}
            <button>-</button>
            </li>)}
            
        </ul>
    </>)
}