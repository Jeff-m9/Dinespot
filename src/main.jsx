import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import DetailsPage from "./Pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/restaurants/:restaurant.id",
    element: <DetailsPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
