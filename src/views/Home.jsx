import React, { useEffect, useState } from "react";

function Home() {
  const [name, setName] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Puedes manejar el error de manera adecuada (mostrar mensaje, redireccionar, etc.)
    }
  };

  const handlePokemonClick = (newName) => {
    setName(newName);
  };

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <div className="text-center m-3 p-2">
      <h1>Bienvenido maestro Pokémon</h1>
      {pokemon && (
        <img
          onClick={() => handlePokemonClick("bulbasaur")}
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={name}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default Home;
