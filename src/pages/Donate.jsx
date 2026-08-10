import { stats } from "../data/tripData.js"
import "./Donate.css"

// TODO: set once the charity + fundraising page (JustGiving/GoFundMe etc.) are chosen.
const DONATION_URL = null

export default function Donate() {
  const pct = Math.min(
    100,
    Math.round((stats.fundsRaisedEUR / stats.fundsGoalEUR) * 100)
  )

  return (
    <section className="section container donate">
      <span className="eyebrow">Donate</span>
      <h1>We're riding for charity</h1>
      <p className="donate-intro">
        We haven't picked the charity yet — once it's confirmed, the link and
        our fundraising progress will live here.
      </p>

      <div className="card donate-card">
        <div className="donate-meter" role="meter" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="donate-meter__track">
            <div className="donate-meter__fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="donate-meter__caption">
            &euro;{stats.fundsRaisedEUR.toLocaleString("en-IE")} raised of a &euro;
            {stats.fundsGoalEUR.toLocaleString("en-IE")} goal
          </p>
        </div>

        {DONATION_URL ? (
          <a href={DONATION_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
            Donate now
          </a>
        ) : (
          <button type="button" className="btn btn-primary" disabled>
            Donation link coming soon
          </button>
        )}
      </div>
    </section>
  )
}
