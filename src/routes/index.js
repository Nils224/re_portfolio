import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    component: Contact
  }
];

export default routes;
