import { useEffect, useState } from "react"
import "./Guestbook.css"

const STORAGE_KEY = "odyssey-guestbook"

const SEED_MESSAGES = [
  {
    name: "The Project Odyssey team",
    message: "Leave us a message — we'll be reading these from the road!",
  },
]

// TODO: replace localStorage with a shared backend (the same Airtable/Sheets
// store used for blog posts) so messages are visible to everyone, not just
// the poster's own browser.
export default function Guestbook() {
  const [messages, setMessages] = useState(SEED_MESSAGES)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setMessages([...JSON.parse(stored), ...SEED_MESSAGES])
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim() || !message.trim()) return
    const next = [{ name: name.trim(), message: message.trim() }, ...messages.filter((m) => m !== SEED_MESSAGES[0])]
    setMessages([...next, SEED_MESSAGES[0]])
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setName("")
    setMessage("")
  }

  return (
    <div className="guestbook">
      <form className="guestbook__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <textarea
          placeholder="Send some encouragement..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          required
        />
        <button type="submit" className="btn btn-primary">
          Leave a message
        </button>
      </form>
      <ul className="guestbook__list">
        {messages.map((entry, index) => (
          <li key={index} className="guestbook__entry">
            <p className="guestbook__message">{entry.message}</p>
            <p className="guestbook__name">— {entry.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
