import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import SingleProject from "./components/SingleProject";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      { path: "stack", element: <Stack /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects/:id",
        element: <SingleProject />,
        errorElement: <ErrorPage />,
      },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
