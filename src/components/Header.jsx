import { useEffect, useState } from "react"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setIsMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}compass.svg`} alt="" width="28" height="28" />
          <span>Project Odyssey</span>
        </NavLink>

        <nav
          id="site-nav"
          className={isMenuOpen ? "site-header__nav is-open" : "site-header__nav"}
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "site-header__link is-active" : "site-header__link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__controls">
          <ThemeToggle />
          <button
            type="button"
            className={isMenuOpen ? "burger is-open" : "burger"}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
