import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export default function Layout() {
  return (
    <>
      <Helmet>
        <title>Sapphire</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
