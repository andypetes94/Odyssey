import NewsletterSignup from "./NewsletterSignup.jsx"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">Project Odyssey</p>
          <p className="site-footer__tagline">
            Galway to Boston, the long way round. Four friends, one very long
            bike ride, raising money along the way.
          </p>
        </div>
        <NewsletterSignup />
      </div>
      <div className="container">
        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} Project Odyssey
        </p>
      </div>
    </footer>
  )
}
