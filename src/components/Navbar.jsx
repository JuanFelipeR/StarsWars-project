import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="contaier">
      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center px-4">
        <div className="brand">
          <Link to="/" className="navbar-brand">
            Star Wars
          </Link>
        </div>

        <div className="btn-navbar d-flex justify-content-start align-items-center gap-3">
          <div className="canvas">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              Browse Data Bank
            </button>

            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  What are you looking for ?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="list-group">
                  <Link to="/" className="text-decoration-none">
                    <li className="list-group-item">Character</li>
                  </Link>

                  <Link to="/planets" className="text-decoration-none">
                    <li className="list-group-item">Planet</li>
                  </Link>

                  <Link to="/vehicles" className="text-decoration-none">
                    <li className="list-group-item">Vehicle</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.favorites.length === 0 ? (
                <li>
                  <span className="dropdown-item">Empty</span>
                </li>
              ) : (
                store.favorites.map((item, idx) => (
                  <li key={idx}>
                    <span className="dropdown-item">{item.properties?.name || "Unknown"}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
