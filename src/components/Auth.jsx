import Login from "../pages/Login";
import { Link, Outlet, Navigate } from "react-router-dom";
export default function Auth() {
  const isLogged = localStorage.getItem("loggedin");

  if (!isLogged) {
    <Navigate to="/login"  state={{message:"you must log in"}} replace/>;
  }
// repalace for no history in path

  return <Outlet />;
}
