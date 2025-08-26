import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Entrance from "./components/Entrance";
import "bootstrap/dist/css/bootstrap.min.css";

/* Come organizzo la cosa? Vorrei che avesse:
- Una pagina iniziale carina, con un bottone in centro con scritto "Entra" o una cosa del genere. Sarebbe bellissimo 
fare un'animazione che ti fa proprio entrare, tipo una porta che si apre. Non so farlo, però, dovrei guardare come si fa in caso
- Ovviamente la pagina con tutti i libri della biblioteca
    * Qui si potrà scegliere in che ordine vedere i libri (titolo, autore, genere, anno di pubblicazione, codice del libro, copertina, possibilmente anno in cui è stato comprato...) > se l'ho venduto (quanto ho guadagnato) o cosa
    * Bottone per aggiungere un libro nuovo
- La pagina dei dettagli del libro
    * Dovrà contenere le info del libro (titolo, autore, data di pubblicazione, editore, ebook/cartaceo, genere, possibili hashtag, note, se ho avuto impressioni particolari, quanto è costato, quando l'ho comprato...)
- Sarebbe bello fare anche una pagina dei libri letti, ma che non ho in biblioteca
    * Quindi sarebbe da specificare dove ho preso il libro, ad es, se in biblioteca o è stato un prestito o che altro

*/

function App() {
  return (
    <BrowserRouter>
      <Entrance />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
