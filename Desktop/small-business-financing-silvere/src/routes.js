import Login from "./views/Auth/Login";
import SignUp from "./views/Auth/SignUp";
import Dashboard from "./views/Dashboard/Dashboard";
import Loans from "./views/Loans/Loans";
import Reviews from "./views/Reviews/Reviews";
import Applications from "./views/Applications/Applications";

const routes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    path: "/signup",
    component: <SignUp />,
    exact: true,
  },
  {
    path: "/loans",
    component: <Loans />,
    exact: true,
  },
  {
    path: "/reviews",
    component: <Reviews />,
    exact: true,
  },
  {
    path: "/applications",
    component: <Applications />,
    exact: true,
  },
  {
    path: "*",
    component: <Dashboard />,
  },
];

export default routes;
