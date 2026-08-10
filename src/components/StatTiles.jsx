import { stats } from "../data/tripData.js"
import "./StatTiles.css"

const numberFormatter = new Intl.NumberFormat("en-IE")
const currencyFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

// Fixed accent order — decorative per tile, not data-driven, so it never
// needs to change when the underlying numbers do.
const TILES = [
  {
    label: "Kilometres ridden",
    value: () => numberFormatter.format(stats.kmRidden),
    accent: "primary",
  },
  {
    label: "Countries crossed",
    value: () => numberFormatter.format(stats.countriesCrossed),
    accent: "secondary",
  },
  {
    label: "Elevation climbed",
    value: () => `${numberFormatter.format(stats.elevationM)} m`,
    accent: "primary",
  },
  {
    label: "Days on the road",
    value: () => numberFormatter.format(stats.daysOnTheRoad),
    accent: "secondary",
  },
  {
    label: "Raised for charity",
    value: () =>
      `${currencyFormatter.format(stats.fundsRaisedEUR)} / ${currencyFormatter.format(stats.fundsGoalEUR)}`,
    accent: "primary",
  },
]

export default function StatTiles() {
  return (
    <div className="stat-tiles" role="list">
      {TILES.map((tile) => (
        <div className="stat-tile" role="listitem" key={tile.label}>
          <span className={`stat-tile__rule stat-tile__rule--${tile.accent}`} />
          <p className="stat-tile__value">{tile.value()}</p>
          <p className="stat-tile__label">{tile.label}</p>
        </div>
      ))}
    </div>
  )
}
