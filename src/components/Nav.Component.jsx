import { Link } from '@tanstack/react-router';

const NavComponent = () => {
  const activeStyle = { style: { color: 'red', fontWeight: 'bold' } };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          tanstack react-router
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeProps={activeStyle}
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link activeProps={activeStyle} className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link activeProps={activeStyle} className="nav-link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Users
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    activeProps={activeStyle}
                    className="dropdown-item"
                    to="/users"
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    activeProps={activeStyle}
                    className="dropdown-item"
                    to="/users/settings"
                  >
                    User Settings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
