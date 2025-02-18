// Importo usesState
import { useState } from "react"

// array di lista di articoli

export default function Main() {
    // articles Contiene l'array di articoli.------ setArticles È una funzione che permette di aggiornare lo stato. ---- useState() Gestisce lo stato
    const [listTitle, setListTitle] = useState("Omar")




    // 1) Aggiungo input di tipo text con il valore che corrispodnde a listTitle e gli metto onChange → È un evento di React che si attiva ogni volta che il valore di un campo <input> cambia (ad esempio, quando l’utente digita qualcosa).


    // 2) Per gestire piu input lo facciamo con il Form quindi come seconda parte aggiungo il form con onSubmit reagisce al click di un button o anche dell invio della tastiera e in qeusto esempio lo vediamo sulla console
    const handleSubmit = event => {
        event.preventDefault();
        console.log('Il nome inviato è:' + listTitle)
    }
    

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" value={listTitle}
                onChange={e => { setListTitle(e.target.value) }}
            />
            <p>Il tuo nome è {listTitle}</p>
        </form>

    </>)
}