import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'; // Pass på at dette er riktig sti til filen, og det er vanlig å bruke stor forbokstav for komponentfiler
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Bruk element prop med JSX */}
          <Route path="/" element={<Home />} /> {/* Du kan opprette en egen Home komponent for hovedsiden */}
        </Routes>
      </div>
    </Router>
  );
}

// Hvis du ikke har en egen komponent for "/" ruten, kan du definere den direkte i App.js
function Home() {
  return (
    <header className="App-header">
      <p>Welcome to our App!</p>
      <a href="/login">Go to Login</a>
    </header>
  );
}

export default App;
