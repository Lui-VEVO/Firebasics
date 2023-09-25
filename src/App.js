import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.js'; // Endre stien hvis Login-komponenten din er i en annen mappe
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <header className="App-header">
              <p>Welcome to our App!</p>
              {/* Du kan legge til en lenke til login siden her hvis du vil */}
              <a href="/login">Go to Login</a>
            </header>
          </Route>
          {/* Du kan legge til flere ruter etter behov */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

