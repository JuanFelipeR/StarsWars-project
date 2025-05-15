import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import  PlanetCard  from "../components/PlanetCard";

import React from 'react'

export const HomePlanet = () => {

    const { store, dispatch } = useGlobalReducer();
    
    const loadPlanets = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/planets/");
        const data = await response.json();
        console.log(data.results); // respuesta de la API

        const planets = [];
        for (let item of data.results) {
          const res = await fetch(item.url);
          const details = await res.json();
          planets.push(details.result);
        }
        console.log(planets)
        dispatch({ type: "set_planets", payload: planets });

      } catch (error) {
        console.error("Error loading planets", error);
      }
    };

    useEffect(() => {
    loadPlanets(); // ¡Ahora sí se ejecuta!
  }, []);

  return (
    <div className="container mt-4">
      <h2>Planets</h2>
      <div className="d-flex overflow-auto">
        {store.planets.map((plnt) => (
          <PlanetCard key={plnt.uid} planet={plnt} /> // renderiza una tarjeta del personaje, en este punto las peopiedades de cada personaje se pasan por medio de props, y por cada personaje se renderiza una card
        ))}
      </div>
    </div>
  )
};


