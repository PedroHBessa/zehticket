
import "../styles/navbar.scss";

import React from "react";
import { Outlet, Link } from "react-router-dom";

import { useState } from "react";



import UserMenu from "./UserMenu";

function NavBar() {
 
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
 
  const [menuIsOpen, setMenuIsOpen] = useState(false);

 





  const toggleMenu = () => {
    if (!menuIsOpen) {
      document.querySelector(".user-menu").style.transform =
        "translateY(-150%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".user-menu").style.transform = "translateY(0%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(180deg)";
    }
    setMenuIsOpen(!menuIsOpen);
  };

  const menuLoggedOut = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedout">
        <li>
          {" "}
       Home
        </li>
        <li>
          {" "}
         Eventos
        </li>
        <li>Contato</li>
        <li>
         Login
        </li>
        <li>
          Registre-se
        </li>
      </ul>
    </div>
  );

  const menuLoggedIn = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedin">
        <li>
          {" "}
         <a href="">Home</a>
        </li>
        <li>
          {" "}
          <a href="">eventos</a>
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
        arrowicon
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
