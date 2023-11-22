import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import DataProvider from "./context/DataContext";
import NotFound from "./views/NotFound";
import Pokemones from "./views/Pokemones";

function App() {
  const [data, setData] = useState([]);

  const pokeApi = "https://pokeapi.co/api/v2";

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const dataPokemons = data.results;

      dataPokemons.sort((a, b) => (a.name > b.name ? 1 : -1));

      setData(dataPokemons);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData(`${pokeApi}/pokemon?limit=10000`);
  }, []);

  return (
    <DataProvider.Provider value={{ data }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DataProvider.Provider>
  );
}

export default App;