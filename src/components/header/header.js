import * as React from "react"
import { Link } from "gatsby"

import "./header.css"

import logo from "../../images/mi-despertar-logo.png"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo Mi Despertar"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Quiénes somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
