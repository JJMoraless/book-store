import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

const VendedorNavBar = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
        to="/inventory"
      >
        inventory
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
        to="/manga"
      >
        Books
      </NavLink>
    </>
  );
};

const ReaderNavBar = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
        to="/manga"
      >
        Books
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
        to="/cart"
      >
        reservations
      </NavLink>
    </>
  );
};

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  user.user.role;

  const navigate = useNavigate();
  const onLogOut = () => {
    logOut();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black p-2">
      <Link className="navbar-brand" to="/">
        Library X
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {user.user.role === "reader" ? <ReaderNavBar /> : <VendedorNavBar />}

          {/* <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/manga"
          >
            Books
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            search
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/cart"
          >
            reservations
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/inventory"
          >
            inventory
          </NavLink> */}
        </div>
      </div>

      <div className="navbar-collapse  w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            {user?.user?.username}
          </span>
          <button className="nav-item nav-link btn" onClick={onLogOut}>
            logOut
          </button>
        </ul>
      </div>
    </nav>
  );
};
