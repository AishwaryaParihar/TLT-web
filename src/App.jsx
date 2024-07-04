import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";

import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Whatshap from "./component/whatshap/Whatshap.jsx";
import Hambergur from "./component/content/Hambergur.jsx";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Hambergur/>
      <Whatshap/>
      <Footer />
    </>
  );
}

export default App;
