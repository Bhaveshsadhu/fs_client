import React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <div className="wrapper">
      {/* Header */}

      <Header></Header>
      {/* main layout */}
      <main className="mainLayout p-5 bg-dark ">
        <Outlet></Outlet>
      </main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};
