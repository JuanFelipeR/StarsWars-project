import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SingleVehicle = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const vehicle = store.vehicles.find((v) => v.uid === uid);

  if (!vehicle) {
    return (
      <div className="text-center mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  const { name, model, passengers, manufacturer } = vehicle.properties;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-warning">{name}</h1>
      <ul className="list-group">
        <li className="list-group-item">Model: {model}</li>
        <li className="list-group-item">Manufacturer: {manufacturer}</li>
        <li className="list-group-item">Passengers: {passengers}</li>
      </ul>
      <Link to="/vehicles" className="btn btn-outline-warning mt-4">
        Back to Vehicles
      </Link>
    </div>
  );
};
