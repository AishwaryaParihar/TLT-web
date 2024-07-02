import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './component/router/index.jsx'
import Navbar from './component/Navbar.jsx'

function App() {


  return (
    <>

<Navbar />

   <RouterProvider router={router}/>
    </>
  )
}

export default App
