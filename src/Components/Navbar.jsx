import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Firebase Authentication
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav align-items-center">
          <Link to={'/'} className="text-decoration-none">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            </Link>
            <Link to={'/about'} className="text-decoration-none">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            </Link>
            <li className="nav-item">
            <Link to={'/dashboard'} className="text-decoration-none">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
               <Link to={'/login'}>
               <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
               </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
