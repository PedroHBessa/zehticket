import React from "react";
import { Link } from "react-router-dom";

function UserMenu() {
  const signOut = () => {
    document.querySelector(".user-menu").style.transform = "translateY(-150%)";
    console.log("signedout");
  };
  return (
    <div className="user-menu" onClick={() => signOut()}>
      <ul>
        <li>
          <Link to={"panel"}>Profile</Link>
        </li>
        <li>
          <Link to={"panel"}>Painel</Link>
        </li>
        <li>
          <Link to={"panel"}>Configurações</Link>
        </li>
        <li>
          <Link to={"panel"}>Suporte</Link>
        </li>
        <li onClick={signOut}>
          <Link to={"panel"}>Sair</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
