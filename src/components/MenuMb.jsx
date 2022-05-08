import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuMb = () => {
  return (
    <div className="menu-mb">
      <ul>
        <li>
          <Link id="home" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link id="events" to={"/events"}>
            Eventos
          </Link>
        </li>
        <li>
          <Link id="contact" to={"/contact"}>
            Contato
          </Link>
        </li>
        <li>
          <Link id="contact" to={"/login"}>
            Login
          </Link>
        </li>
        <li>
          <Link id="contact" to={"/signup"}>
            Cadastre-se
          </Link>
        </li>
        <li>
          <a target={"_blank"} href="https://adm.zehticket.com.br/">
            ÁREA DO PRODUTOR
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMb;
