import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import CharacterCard from "../components/CharacterCard";

export const HomeCharacter = () => {
  const { store, dispatch } = useGlobalReducer();

  const loadCharacters = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people"); //  primer fetch al endpoint base de personajes. Este endpoint devuelve un array de objetos con solo: uid, name, url (info detallada)
        const data = await res.json(); 
        const characters = []; // Arreglo vacio para alamcenar los detalles especificos del personaje en url

		//la respuesta de data del primer fetch sera {
										// "uid": "1",
										// "name": "Luke Skywalker",
										// "url": "https://www.swapi.tech/api/people/1"
										// }

        for (let item of data.results) { // se realiza uan iteracion sobre cada respuesta para obetenr la informacion detallada
          const res = await fetch(item.url); //llamamos al segundo fecth 
          const detail = await res.json(); // se captura la respuesta
		  	//la respuesta de data sera {
								//   message: "ok",
								//   result: {
								//     uid: "1",
								//     _id: "5f63e5bfbf1b2a0017438d8d",
								//     description: "A legendary Jedi...",
								//     properties: {
								//       name: "Luke Skywalker",
								//       height: "172",
								//       mass: "77",
								//       gender: "male",
								//       hair_color: "blond",
								//       eye_color: "blue",
								//       birth_year: "19BBY"
								//     }
								//   }
								// }
          characters.push(detail.result); // se inserta en el array vacio definido al rpincipio
        }

        dispatch({ type: "set_characters", payload: characters }); // finalizar el for, enviamos el array completo al store usando la acción "set_characters" para actualizar store.characters.
      } catch (error) {
        console.error("Error loading characters", error);
      }
    };

  useEffect(() => {
    loadCharacters(); // llamamos para que se ejecute al cargar la pagina
  }, [dispatch]); // opcional ya que dispatch es fijo

  return (
    <div className="container mt-4">
      <h2>Characters</h2>
      <div className="d-flex overflow-auto">
        {store.characters.map((char) => (
          <CharacterCard key={char.uid} character={char} /> // renderiza una tarjeta del personaje, en este punto las peopiedades de cada personaje se pasan por medio de props, y por cada personaje se renderiza una card
        ))}
      </div>
    </div>
  );
};