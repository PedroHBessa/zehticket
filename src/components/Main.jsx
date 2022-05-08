import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import MenuMb from "./MenuMb";

import NavBar from "./NavBar";

import Payment from "./Payment";

const Main = () => {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Main;
