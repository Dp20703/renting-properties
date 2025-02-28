import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
        <div className="container">
          <Link id="link" className="navbar-brand" to="/"><span>Renting </span>Properties</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto " style={{ fontSize: '20px' }}>
              <li className="nav-item active">
                <Link id="link" className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/about">About</Link>
              </li>

              {/* Bootstrap Dropdown (No Hooks) */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                  <li><Link id="link" className="dropdown-item" to="/properties">Properties</Link></li>
                  <li><Link id="link" className="dropdown-item" to="/properties-single">Properties Single</Link></li>
                  <li><Link id="link" className="dropdown-item" to="/login">Login</Link></li>
                  <li><Link id="link" className="dropdown-item" to="/signup">Sign Up</Link></li>
                  <li><Link id="link" className="dropdown-item" to="/faq">FAQ</Link></li>
                </ul>
              </li>


              <li className="nav-item">
                <Link id="link" className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/services">Services</Link>
              </li>
            </ul>

            <form className="form-inline">
              <Link id="link" className="btn btn-secondary btn-theme" to="/find-property">
                <span className="fa fa-search"></span> Find Property
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
