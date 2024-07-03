<<<<<<< HEAD
import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
=======
import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './component/router/index.jsx'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
>>>>>>> daff5918eae89224248a9a5993f8b42849a4ab4b

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <RouterProvider router={router} />
=======
   <Header/>
   <RouterProvider router={router}/>
   <Footer/>
>>>>>>> daff5918eae89224248a9a5993f8b42849a4ab4b
    </>
  );
}

export default App;
