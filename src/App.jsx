import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ClubList from './Components/ClubList';
import './App.css';

function App() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        setClubs(Object.values(data));
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;