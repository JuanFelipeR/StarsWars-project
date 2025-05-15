import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { store } = useGlobalReducer();
  const { theId } = useParams();

  // Busca el personaje por uid, char se paso pos props previamente
  const character = store.characters.find(char => char.uid === theId);

  if (!character) {
    return <div className="text-center mt-5"><p>Loading...</p></div>;
  }

  const { name, gender, hair_color, eye_color, birth_year, height, mass } = character.properties;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/600x400" className="img-fluid" alt={name} />
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item"><strong>Gender:</strong> {gender}</li>
            <li className="list-group-item"><strong>Hair Color:</strong> {hair_color}</li>
            <li className="list-group-item"><strong>Eye Color:</strong> {eye_color}</li>
            <li className="list-group-item"><strong>Birth Year:</strong> {birth_year}</li>
            <li className="list-group-item"><strong>Height:</strong> {height} cm</li>
            <li className="list-group-item"><strong>Mass:</strong> {mass} kg</li>
          </ul>
          <Link to="/" className="btn btn-primary mt-4">Back Home</Link>
        </div>
      </div>
    </div>
  );
};

