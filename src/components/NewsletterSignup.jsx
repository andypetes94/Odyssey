import { useState } from "react"
import "./NewsletterSignup.css"

// TODO: wire to a real provider (Buttondown/Mailchimp) once one is chosen.
// For now this just confirms the form works end-to-end.
export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="newsletter">
      <p className="newsletter__label">Get notified of new posts</p>
      {submitted ? (
        <p className="newsletter__success">Thanks — you're on the list.</p>
      ) : (
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}
