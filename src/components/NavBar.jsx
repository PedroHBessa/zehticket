

import React from "react";
import { Outlet, Link } from "react-router-dom";

import { useState } from "react";
import { BiDownArrow } from "react-icons/bi"


import UserMenu from "./UserMenu";

function NavBar() {
 
  const [isLogged, setIsLogged] = useState(true);
  const [userName, setUserName] = useState("");
 
  const [menuIsOpen, setMenuIsOpen] = useState(false);

 





  const toggleMenu = () => {
    if (menuIsOpen) {
      document.querySelector(".user-menu").style.transform =
      "translateY(-150%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(0deg)";
      
      
    } else {
      document.querySelector(".user-menu").style.transform = "translateY(0%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(180deg)";
      
     
    }
    setMenuIsOpen(!menuIsOpen)
  };

  const menuLoggedOut = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedout">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/events">Eventos</Link>
        </li>
        <li>Contato</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="signup">Registre-se</Link>
        </li>
      </ul>
    </div>
  );

  const menuLoggedIn = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedin">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/events">Eventos</Link>
        </li>
        <li>Contato</li>
      </ul>
    </div>
  );

  const userConsole = (
    <div className="navbar__user-console" onClick={toggleMenu}>
      <div className="navbar__user-console__text">
        <span>{`Bem-vindo,  ${userName} `}</span>
      </div>
      <div className="navbar__user-console__img">
        <img
          width={60}
          height={60}
          src={require("../assets/profile-s.jpeg")}
          alt="/"
        />
        <span className="arrow">
        <BiDownArrow />
        </span>
      </div>
    </div>
  );

  return (
    <div className="bar">
      <div className="navbar">
        <div className="navbar__logo">
          {" "}
        ZEETICKET
        </div>
        <div className="navbar__search">
          <form action="">
            <input
              className="navbar__search__form__input"
              type="text"
              placeholder="procurar eventos"
            />
          </form>
        </div>
        {isLogged ? menuLoggedIn : menuLoggedOut}
        {isLogged ? userConsole : null}
      </div>
      <UserMenu />
      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
