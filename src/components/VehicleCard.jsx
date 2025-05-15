import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const VehicleCard = ({ vehicle }) => {
  //recibiendo props
  const { store, dispatch } = useGlobalReducer();

  const isFav = store.favorites.some(
    (fav) => fav.uid === vehicle.uid && fav.type === "vehicle"
  );
  // Verifica si el vehículo está en la lista de favoritos

  return (
    <div className="card m-2" style={{ minWidth: "18rem" }}>
      <img
        src="https://via.placeholder.com/400x200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{vehicle.properties.name}</h5>
        <p className="card-text">
          Model: {vehicle.properties.model}
          <br />
          Manufacturer: {vehicle.properties.manufacturer}
          <br />
          Passengers: {vehicle.properties.passengers}
        </p>

        {/* Enlace hacia la vista de detalle */}
        <Link
          to={`/vehicle/${vehicle.uid}`}
          className="btn btn-outline-primary me-2"
        >
          Learn more!
        </Link>

        <button
          className="btn btn-outline-warning"
          onClick={() =>
            dispatch({
              type: "toggle_favorite",
              payload: {
                uid: vehicle.uid,
                type: "vehicle",
                ...vehicle,
              },
            })
          } // se despacha el objeto vehículo a favoritos bajo la acción toggle_favorite
        >
          {isFav ? "💛" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
