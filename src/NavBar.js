import React from "react";
import ReactDOM from "react-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <div class="navbar">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              App UdS
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    UdS
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/UdS">
                        Istanze
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Nuove istanze
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Impostazioni
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Magistrati
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Procuratori
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Posizioni giuridiche
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Avvocati
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sedi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Organi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Richieste
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
