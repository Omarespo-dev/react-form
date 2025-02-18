// Importo usesState
import { useState } from "react"

export default function Main() {
    // articles Contiene l'array di articoli.------ setArticles È una funzione che permette di aggiornare lo stato. ---- useState() Gestisce lo stato
    const [listTitle, setListTitle] = useState("antonio")

    // Aggiungo input di tipo text con il valore che corrispodnde a listTitle e gli metto onChange → È un evento di React che si attiva ogni volta che il valore di un campo <input> cambia (ad esempio, quando l’utente digita qualcosa).
    return (<>
        <input type="text" value={listTitle}
            onChange={e => { setListTitle(e.target.value) }}
        />
        <p>Il tuo nome è {listTitle}</p>
    </>)
}