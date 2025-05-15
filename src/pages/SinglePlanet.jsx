import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SinglePlanet = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const planet = store.planets.find((p) => p.uid === uid);

  if (!planet) {
    return (
      <div className="text-center mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  const { name, climate, population, terrain, gravity } = planet.properties;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-warning">{name}</h1>
      <ul className="list-group">
        <li className="list-group-item">Climate: {climate}</li>
        <li className="list-group-item">Population: {population}</li>
        <li className="list-group-item">Terrain: {terrain}</li>
        <li className="list-group-item">Gravity: {gravity}</li>
      </ul>
      <Link to="/planets" className="btn btn-outline-warning mt-4">
        Back to Planets
      </Link>
    </div>
  );
};

