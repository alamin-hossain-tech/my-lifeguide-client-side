import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/EditReview/EditReview";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import SingleService from "../../Pages/SingleService/SingleService";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://my-life-guide-server.vercel.app/services"),
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
        element: <Services></Services>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/services/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(
            `https://my-life-guide-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addreview/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-life-guide-server.vercel.app/services/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <AddReview></AddReview>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/review/edit/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-life-guide-server.vercel.app/getreviews/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <EditReview></EditReview>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
