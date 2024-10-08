import './App.css';
import Konyv from './components/Konyv.js';
import Tartalom from './components/Tartalom.js';

const konyvAdat = {
  szerzo: "Frank Herbert",
  cim: "Dűne",
  ar: 5600
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Könyváruház</header>
        <article>
          <h2>Helló világ!</h2>
          <Tartalom konyvAdat={konyvAdat}/>
        </article>
        <footer>Richter Balázs</footer>
    </div>
  );
}

export default App;
