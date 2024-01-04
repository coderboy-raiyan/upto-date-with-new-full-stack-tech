import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddUser from "./pages/AddUser/AddUser.jsx";
import Login from "./pages/Login/Login.jsx";
import UserDetails from "./pages/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/category/:slug",
        element: <App />,
      },
    ],
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
  {
    path: "/addUser",
    element: <AddUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
