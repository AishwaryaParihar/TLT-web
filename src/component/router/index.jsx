import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home";
import About from "../About";
import StudyEssentials from "../StudyEssentials";
import PrivacyPolicy from "../PrivacyPolicy";
import TnC from "../TnC"
import ContactUs from "../content/Contactus";
import App from "../../App";
import MpcjproductCard from "../content/MpcjproductCard";
import MockTestCard from "../content/MockTestCard";



export const router = createBrowserRouter([


  {
    path:"/",
    element : <App/>,
    children : [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path : "study-Essentials",
        element : <StudyEssentials/>,
        children : [
          {
          path : "MpcjproductCard",
          element : <MpcjproductCard/>,
        },
          {
          path : "MockTestCard",
          element : <MockTestCard/>,
        }
        ],
      },
      {
        path : "privacy-policy",
        element : <PrivacyPolicy/>,
      },
      {
        path : "terms-conditions",
        element : <TnC/>
      },
      {
        path : "contact-support",
        element : <ContactUs/>
      }
    ]
  }
  
]);
