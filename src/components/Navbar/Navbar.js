import React from "react";
import Logo from "./logo.svg";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>

      <Button />
    </nav>
  );
};

export default Navbar;
