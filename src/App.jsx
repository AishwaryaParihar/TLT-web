import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
