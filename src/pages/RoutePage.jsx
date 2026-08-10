import RouteMap from "../components/RouteMap.jsx"
import { blocks } from "../data/tripData.js"
import "./RoutePage.css"

export default function RoutePage() {
  return (
    <section className="section container">
      <span className="eyebrow">The route</span>
      <h1>Six blocks, not a fixed schedule</h1>
      <p className="route-intro">
        Rather than book fifteen months in advance, we're planning this trip
        in six flexible blocks — with floating time built in to linger
        somewhere we love, or push on if the road's calling.
      </p>
      <p className="route-intro route-intro--flex">
        <strong>Nothing below is fixed.</strong> This is a sketch, not an
        itinerary — the actual path will flex around how much energy we
        have on a given week, the weather, border and visa realities at the
        time, and, more often than not, wherever a local tells us we
        absolutely have to go. If a route changes because someone we met in
        a bar in Zagreb insisted on it, that's the trip working as intended.
      </p>

      <RouteMap />

      <ol className="route-timeline">
        {blocks.map((block, index) => (
          <li className="route-block" key={block.id}>
            <div className="route-block__marker">{index + 1}</div>
            <div className="route-block__body">
              <div className="route-block__heading">
                <h3>{block.title}</h3>
                <span className="route-block__meta">
                  {block.months} &middot; {block.duration}
                </span>
              </div>
              <p>{block.summary}</p>
              {block.conditional && (
                <p className="route-block__note">
                  This leg is conditional on visa and border access at the
                  time — we're planning two routes and will decide closer to
                  departure.
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
