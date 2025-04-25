import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import DetailsPage from "./Pages/Details.jsx";
import Form from "./Pages/Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/restaurants/:restaurantId",
    element: <DetailsPage />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
