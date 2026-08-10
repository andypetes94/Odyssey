import { friends, TRIP_START_LABEL } from "../data/tripData.js"
import "./About.css"

export default function About() {
  return (
    <>
      <section className="section container">
        <span className="eyebrow">About</span>
        <h1>Four friends, one very long bike ride</h1>
        <p className="about-intro">
          Project Odyssey is a ~15-month cycling trip from Galway to Boston —
          the long way round, through Europe, Turkey, the Caucasus, Central
          Asia and China, before flying to San Diego and riding the rest of
          the way across the United States. We're setting off from Galway
          on {TRIP_START_LABEL} — everything after that is a rough sketch,
          not a schedule.
        </p>
      </section>

      <section className="section container">
        <div className="friends-grid">
          {friends.map((friend) => (
            <div className="card friend-card" key={friend.name}>
              <h3>{friend.name}</h3>
              <p className="friend-card__home">{friend.home}</p>
              <p>{friend.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>How we're doing this</h2>
        <p>
          Normal days are 70&ndash;90 km, big transit days 110&ndash;140 km,
          mountain days 40&ndash;70 km &mdash; with a proper rest or
          exploration day roughly every 5&ndash;6 days on the bike. We're
          camping 60&ndash;75% of nights to keep the budget (and the trip)
          honest.
        </p>
        <p>
          Nobody has to ride every kilometre. If one of us wants a rest day,
          or to linger somewhere for a week, that's the trip working as
          intended &mdash; not a problem to solve.
        </p>
      </section>
    </>
  )
}
