import { NavLink, Outlet } from "react-router-dom";

export default function Hostlayout() {
  return (
    <nav className=" flex gap-2">
      <NavLink
        className={({ isActive }) =>
          `border-b-4 ${
            isActive ? "border-customOrange" : "border-transparent"
          } hover:border-customOrange`
        }
        to="."
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/host/reviews"
        className={({ isActive }) =>
          `border-b-4 ${
            isActive ? "border-customOrange" : "border-transparent"
          } hover:border-customOrange`
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="/host/income"
        className={({ isActive }) =>
          `border-b-4 ${
            isActive ? "border-customOrange" : "border-transparent"
          } hover:border-customOrange`
        }
      >
        Income
      </NavLink>
      <NavLink
        to="/host/vans"
        className={({ isActive }) =>
          `border-b-4 ${
            isActive ? "border-customOrange" : "border-transparent"
          } hover:border-customOrange`
        }
      >
        Vans
      </NavLink>
      <Outlet />
    </nav>
  );
}
