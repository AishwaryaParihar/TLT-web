import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home";
import About from "../About";
import StudyEssentials from "../StudyEssentials";



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
]);
