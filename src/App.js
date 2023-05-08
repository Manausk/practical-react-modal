import React from "react";
import Modal from "react-modal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button>Open Modal</button>
      <Modal isOpen={true}>
        <h2>Modal title </h2>
        <p>Modal body</p>
      </Modal>
    </div>
  );
}

export default App;
