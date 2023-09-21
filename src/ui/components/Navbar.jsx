import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Library X
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}  `
            }
            to="/fiction"
          >
            fiction
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}  `
            }
            to="/manga"
          >
            manga
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}  `
            }
            to="/cart"
          >
            cart
          </NavLink>
        </div>
      </div>

      {/* <div className="navbar-collapse  w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}  `
            }
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div> */}
      <div className="navbar-collapse  w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">JhonMg</span>
          <button className="nav-item nav-link btn">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""} p-0  `
              }
              to="/login"
            >
              Logout
            </NavLink>
          </button>
        </ul>
      </div>
    </nav>
  );
};
