//PACKAGES
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import App from "../App";
import HomePage from "../pages/HomePage";
import Events from "../pages/Events";
import Contacts from "../pages/Contacts";
import Program from "../pages/Program";
import Catalog from "../pages/Catalog";
import Gallery from "../pages/Gallery";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "program",
        element: <Program />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
    ],
  },
]);

export default router;
