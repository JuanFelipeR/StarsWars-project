import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PlanetCard = ({ planet }) => {
  //recibiendo props
  const { store, dispatch } = useGlobalReducer();
  const isFav = store.favorites.some(
    (fav) => fav.uid === planet.uid && fav.type === "planet"
  );
  // Verifica si el personaje está en la lista de favoritos. metodo .some() Evalúa si al menos un elemento del array cumple con una condición.

  return (
    <div className="card m-2" style={{ minWidth: "18rem" }}>
      <img
        src="https://via.placeholder.com/400x200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{planet.properties.name}</h5>
        <p className="card-text">
          climate: {planet.properties.climate}
          <br />
          Population: {planet.properties.population}
          <br />
          Created: {planet.properties.created}
        </p>

        {/* Enlace hacia la vista de detalle */}
        <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary me-2">
          Learn more!
        </Link>

        <button
          className="btn btn-outline-warning"
          onClick={() =>
            dispatch({
              type: "toggle_favorite",
              payload: {
                uid: planet.uid,
                type: "planet",
                ...planet,
              },
            })
          } // se despacha el prop caracter a favoritos bajo la accion toggle_favorite
        >
          {isFav ? "💛" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default PlanetCard;
