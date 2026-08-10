import "./Tracker.css"

// TODO: once the Polarsteps trip is live, replace POLARSTEPS_EMBED_URL with
// the trip's actual embed URL (Polarsteps trip page → Share → Embed).
const POLARSTEPS_EMBED_URL = null

export default function Tracker() {
  return (
    <section className="section container">
      <span className="eyebrow">Live tracker</span>
      <h1>Where we are right now</h1>
      <p className="tracker-intro">
        We're tracking the trip on Polarsteps — our route updates as we ride,
        with photos and notes dropped in along the way.
      </p>

      {POLARSTEPS_EMBED_URL ? (
        <iframe
          className="tracker-embed"
          src={POLARSTEPS_EMBED_URL}
          title="Live trip tracker"
          loading="lazy"
        />
      ) : (
        <div className="tracker-embed tracker-embed--placeholder card">
          <p>
            The live map will appear here once we set off and our Polarsteps
            trip goes live. Check back closer to departure.
          </p>
        </div>
      )}
    </section>
  )
}
