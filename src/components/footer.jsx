import React from "react";
import { NavLink } from "react-router-dom";

// Stateless Functional Component
const Footer = () => {
  return (
    <footer className="py-2 bg-dark static-bottom">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; <a href="https://github.com/cpham19">Calvin Pham</a>{" "}
          2019
        </p>
      </div>
    </footer>
  );
};

export default Footer;
