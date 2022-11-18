import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoutes>
            <Services></Services>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);
