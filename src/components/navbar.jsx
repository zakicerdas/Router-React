import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
              <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
             <li>
              <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}