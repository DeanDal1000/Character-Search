import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Character from './components/character';
import './App.css';

const url =
  'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

function App() {
  const [characters, setCharacters] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, []);

  return (
    <>
      <header>
        <input className="search" type="search" placeholder="Search..." />
      </header>
      <div className="character-container">
        {characters.length > 0 &&
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
      </div>
    </>
  );
}

export default App;
