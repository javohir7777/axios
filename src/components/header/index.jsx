import React, { Component } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <ul>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/">Home</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/business">Business</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/entertainment">Entertainment</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/general">General</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/health">Health</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/science">Science</NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink className="nav-menu__link" to="/technology">Technology</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
