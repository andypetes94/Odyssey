import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle.jsx"
import "./Header.css"

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/route", label: "Route" },
  { to: "/tracker", label: "Live Tracker" },
  { to: "/blog", label: "Blog" },
  { to: "/donate", label: "Donate" },
  { to: "/about", label: "About" },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand">
          <img src={`${import.meta.env.BASE_URL}compass.svg`} alt="" width="28" height="28" />
          <span>Project Odyssey</span>
        </NavLink>
        <nav className="site-header__nav">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "site-header__link is-active" : "site-header__link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
