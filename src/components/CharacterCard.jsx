import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CharacterCard = ({ character }) => {
  //recibiendo props
  const { store, dispatch } = useGlobalReducer();
  const isFav = store.favorites.some(
    (fav) => fav.uid === character.uid && fav.type === "character"
  );
  // Verifica si el personaje está en la lista de favoritos. metodo .some() Evalúa si al menos un elemento del array cumple con una condición.

  return (
    <div className="card m-2" style={{ minWidth: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
        className="card-img-top"
        alt={character.properties.name}
      />

      <div className="card-body">
        <h5 className="card-title">{character.properties.name}</h5>
        <p className="card-text">
          Gender: {character.properties.gender}
          <br />
          Hair Color: {character.properties.hair_color}
          <br />
          Eye Color: {character.properties.eye_color}
        </p>

        {/* Enlace hacia la vista de detalle */}
        <Link
          to={`/single/${character.uid}`}
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
                uid: character.uid,
                type: "character",
                ...character, // paso todas la propiedades en caso de necesitarlas
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

export default CharacterCard;
