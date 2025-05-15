// Estado inicial
export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favorites: [],
});

// Reductor que manejará tus acciones, recibe el estado actua (store) y la accion que es un objeto con type y payload = datos a modificar del estado
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_characters":
      return {
        ...store, // copia todas las propiedades del objeto store original al nuevo objeto que estás retornando.
        characters: action.payload, //trae los datos despachados por la accion set_characters'
      };

    case "set_planets":
      return {
        ...store, // copia todas las propiedades del objeto store original al nuevo objeto que estás retornando.
        planets: action.payload, //trae los datos despachados por la accion set_planets'
      };

    case "set_vehicles":
      return {
        ...store,
        vehicles: action.payload,
      };

    case "toggle_favorite":
      const { uid, type } = action.payload;

      const exists = store.favorites.some(
        (fav) => fav.uid === uid && fav.type === type
      );

      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(
              (fav) => !(fav.uid === uid && fav.type === type)
            )
          : [...store.favorites, action.payload],
      };

    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
}
