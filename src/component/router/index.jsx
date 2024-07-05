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



export const router = createBrowserRouter([
  {
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
    path : "/terms-conditions",
    element : <TnC/>
  },
  {
    path : "/contact-support",
    element : <ContactUs/>
  }
]);
