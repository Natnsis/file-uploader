import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Copy from "./Copy.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/copy", element: <Copy /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
