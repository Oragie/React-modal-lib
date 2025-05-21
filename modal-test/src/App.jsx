import { useState } from "react";
import { Modal } from "react-modal-lib";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="App">
      <h1>Test de la modale React</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello 👋</h2>
        <p>Voici une modale avec animation et dark mode !</p>
      </Modal>
    </main>
  );
}

export default App;
