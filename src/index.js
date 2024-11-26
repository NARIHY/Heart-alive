// Importation des dépendances nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client'; // Pour React 18 et versions supérieures
import App from './App'; // Le composant principal de votre application

// Créez un "root" pour l'application (le point d'entrée du DOM)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application React dans l'élément DOM avec id 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
