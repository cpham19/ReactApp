import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Component
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
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon="bars" id="sidebarCollapse" />
            </button>
            <div className="navbar-brand">React App</div>
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
              <ul
                className="navbar-nav ml-auto"
                style={{ paddingRight: "100xpx" }}
              >
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    className="nav-link"
                    activeClassName="active-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    className="nav-link"
                    activeClassName="active-link"
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
                  <div className="dropdown-menu dropdown-menu-right">
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
