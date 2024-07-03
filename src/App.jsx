<<<<<<< HEAD
import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
=======
import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './component/router/index.jsx'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
>>>>>>> d0cac02e3cc1abc973fbd460f71df394f59c9575

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <RouterProvider router={router} />
      <Footer />
=======
   <Header/>
   <RouterProvider router={router}/>
   <Footer/>
>>>>>>> d0cac02e3cc1abc973fbd460f71df394f59c9575
    </>
  );
}

export default App;
