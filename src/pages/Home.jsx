import { Link } from "react-router-dom"
import StatTiles from "../components/StatTiles.jsx"
import Guestbook from "../components/Guestbook.jsx"
import { blocks, TRIP_START_LABEL } from "../data/tripData.js"
import "./Home.css"

export default function Home() {
  return (
    <>
      <section className="hero container">
        <span className="eyebrow">Project Odyssey</span>
        <h1>Galway to Boston, the long way round.</h1>
        <p className="hero__date">Departing Galway &middot; {TRIP_START_LABEL}</p>
        <p className="hero__lede">
          Four friends. One bicycle each. A 15-month ride through Europe,
          Turkey, the Caucasus, Central Asia, China and the United States —
          raising money for charity along the way.
        </p>
        <div className="hero__actions">
          <Link to="/tracker" className="btn btn-primary">
            Follow the live tracker
          </Link>
          <Link to="/route" className="btn btn-secondary">
            See the route
          </Link>
        </div>
      </section>

      <section className="section container">
        <StatTiles />
      </section>

      <section className="section container">
        <div className="charity-banner">
          <div>
            <h2>We're riding for charity</h2>
            <p>Every kilometre helps us raise money for a cause we care about.</p>
          </div>
          <Link to="/donate" className="btn btn-secondary">
            Donate now
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="home-section__heading">
          <h2>The route, in six blocks</h2>
          <Link to="/route">See the full route &amp; map &rarr;</Link>
        </div>
        <p className="route-preview-note">
          A rough sketch, not a schedule — expect it to flex.
        </p>
        <div className="route-preview-grid">
          {blocks.map((block, index) => (
            <Link
              to="/route"
              key={block.id}
              className={
                block.conditional
                  ? "route-preview-card route-preview-card--conditional"
                  : "route-preview-card"
              }
            >
              <span className="route-preview-card__marker">{index + 1}</span>
              <h3>{block.title}</h3>
              <p className="route-preview-card__months">{block.months}</p>
              <p className="route-preview-card__summary">{block.summary}</p>
              {block.conditional && (
                <span className="route-preview-card__tag">Conditional leg</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="home-section__heading">
          <h2>Cheer us on</h2>
        </div>
        <Guestbook />
      </section>
    </>
  )
}
