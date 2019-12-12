import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, NavDropdown } from "react-bootstrap";
// Stateless Functional Component
class Header extends Component {
  constructor(props) {
    super(props);
    // Bind handler for toggle button
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  state = {
    collapsed: true
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleSelect(evtKey, event) {
    // Push route
    console.log(evtKey);
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <span className="navbar-brand">React App</span>
            <button
              onClick={this.toggleNavbar}
              className={`${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    className="nav-link"
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    className="nav-link"
                    activeClassName="active"
                    to="/test"
                  >
                    Test
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href=""
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon="bars" />
                  </a>
                  <div class="dropdown-menu">
                    <NavLink className="dropdown-item" exact={true} to="/">
                      Home
                    </NavLink>
                    <NavLink className="dropdown-item" exact={true} to="/test">
                      Test
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
