import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
