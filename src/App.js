import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [estEnMouvement, setEstEnMouvement] = useState(false);

  // Fonction pour démarrer l'animation
  const demarrerCoeur = () => {
    setEstEnMouvement(true);
  };

  // Fonction pour arrêter l'animation
  const arreterCoeur = () => {
    setEstEnMouvement(false);
  };

  return (
    <div className="App">
      {/* Cœur animé */}
      <div className={`coer ${estEnMouvement ? 'battre' : ''}`} />
      
      {/* Conteneur des boutons */}
      <div className="button-container">
        <button onClick={demarrerCoeur}>Lancer le cœur</button>
        <button onClick={arreterCoeur}>Arrêter le cœur</button>
      </div>
    </div>
  );
};

export default App;
