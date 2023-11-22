import React, { useContext, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import DataProvider from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Pokemones() {
  const { data } = useContext(DataProvider);
  const [pokemon, setPokemon] = useState("Pokemones");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (pokemon === "Pokemones") {
      setError("Por favor, selecciona un Pokémon.");
      return;
    }

    // Lógica adicional, si es necesario, antes de la navegación.
    navigate(`/pokemones/${pokemon}`);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="m-3">Selecciona tu Pokémon</h1>
        
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Select
              className="m-auto text-center"
              style={{ width: "30rem" }}
              aria-label="Default select example"
              value={pokemon}
              onChange={(e) => {
                setPokemon(e.target.value);
                setError(null); // Limpiar el error al cambiar la selección.
              }}
            >
              <option disabled value="Pokemones">
                Pokemones
              </option>
              {data.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" disabled={pokemon === "Pokemones"}>
            Ver detalle
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Pokemones;
