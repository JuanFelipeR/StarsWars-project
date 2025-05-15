import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import VehicleCard from "../components/VehicleCard";

import React from 'react'

export const HomeVehicle = () => {

  const { store, dispatch } = useGlobalReducer();

  const loadVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles/");
      const data = await response.json();
      console.log(data.results); // respuesta de la API

      const vehicles = [];
      for (let item of data.results) {
        const res = await fetch(item.url);
        const details = await res.json();
        vehicles.push(details.result);
      }
      console.log(vehicles)
      dispatch({ type: "set_vehicles", payload: vehicles });

    } catch (error) {
      console.error("Error loading vehicles", error);
    }
  };

  useEffect(() => {
    loadVehicles(); // ¡Ahora sí se ejecuta!
  }, []);

  return (
    <div className="container mt-4">
      <h2>Vehicles</h2>
      <div className="d-flex overflow-auto">
        {store.vehicles.map((vhc) => (
          <VehicleCard key={vhc.uid} vehicle={vhc} /> 
          // renderiza una tarjeta del vehículo, pasando sus propiedades por props
        ))}
      </div>
    </div>
  );
};

