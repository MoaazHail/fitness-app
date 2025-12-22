import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Classes from "./classes/classes";
import Healthy from "./healthy/healthy";
import Layout from "@/components/layout/layout";
import NotFound from "./not-found/not-found";
import Login from "./auth/login/login";
import Register from "./auth/register/register";
import ForgotPassword from "./auth/forgot-password/forgot-password";
export default function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/classes", element: <Classes /> },
        { path: "/healthy", element: <Healthy /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
  ]);
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}
