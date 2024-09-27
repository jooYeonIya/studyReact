import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1280")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      })
  }, []);

  const changeImage = (e) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${e.target.value}/`)
      .then((response) => response.json())
      .then((data) => {
        setImageURL(data.sprites.front_default);
      })
  };

  return (
    <>
      <p>{isLoading ? <span>Loading...</span> : "Loading done"}</p>
      <select onChange={changeImage}>
        {data.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <img src={imageURL} alt="Pokemon"/>
    </>
  );
}

export default App;
