import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stateless Functional Component
const Sidebar = () => {
  return (
    <React.Fragment>
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Sidebar</h3>
          <strong>SB</strong>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <FontAwesomeIcon icon="home" /> Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
