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
<<<<<<< HEAD
import ReturnAndRefund from "../content/ReturnAndRefund";
=======
import TnC from "../TnC"
import ContactUs from "../content/Contactus";
import App from "../../App";
>>>>>>> 0c0103b3c820cef036a0e62381f1b09ed24a11d6



export const router = createBrowserRouter([


  {
<<<<<<< HEAD
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path : "/studyEssentials",
    element : <StudyEssentials/>,
  },
  {
    path : "/privacy-policy",
    element : <PrivacyPolicy/>,
  },
  {
    path : "/Return-Refund",
    element : <ReturnAndRefund/>,
  },
=======
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
  
>>>>>>> 0c0103b3c820cef036a0e62381f1b09ed24a11d6
]);
