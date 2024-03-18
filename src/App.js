import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contacts",
            element: <Contact />,
        },
        {
            path: "/category/:name",
            element: <Category />,
        },
        {
            path: "/meal/:id",
            element: <Recipe />,
        }, //dobavit default not found
    ],
    { basename: "/" }
);

function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
}

export default App;
