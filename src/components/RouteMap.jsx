import { useEffect, useMemo } from "react"
import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useTheme } from "../hooks/useTheme.js"
import { routeLines, flightLine } from "../data/routeGeo.js"
import "./RouteMap.css"

// CARTO's free basemap tiles — no API key required, attribution included below.
const TILE_URLS = {
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
}
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'

// Leaflet writes these straight into SVG attributes, so plain hex rather
// than CSS custom properties — mirrors the tokens in index.css.
const COLORS = {
  light: { route: "#c1502e", conditional: "#00897b", flight: "#9a8f82" },
  dark: { route: "#d9663f", conditional: "#1fa394", flight: "#9a8f82" },
}

function FitToRoute({ bounds }) {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(bounds, { padding: [24, 24] })
  }, [map, bounds])
  return null
}

export default function RouteMap() {
  const [theme] = useTheme()
  const colors = COLORS[theme]

  const bounds = useMemo(
    () => routeLines.flatMap((line) => line.points.map((p) => [p[0], p[1]])),
    []
  )

  return (
    <div className="route-map card">
      <MapContainer
        center={[40, 30]}
        zoom={3}
        scrollWheelZoom={false}
        className="route-map__canvas"
      >
        <FitToRoute bounds={bounds} />
        <TileLayer url={TILE_URLS[theme]} attribution={ATTRIBUTION} subdomains="abcd" />

        {routeLines.map((line) => (
          <Polyline
            key={line.blockId}
            positions={line.points.map((p) => [p[0], p[1]])}
            pathOptions={{
              color: line.dashed ? colors.conditional : colors.route,
              weight: 3,
              dashArray: line.dashed ? "2 8" : null,
            }}
          />
        ))}

        <Polyline
          positions={flightLine.points.map((p) => [p[0], p[1]])}
          pathOptions={{ color: colors.flight, weight: 2, dashArray: "1 6" }}
        />

        {routeLines.map((line) =>
          line.points.map(([lat, lng, label], index) => (
            <CircleMarker
              key={`${line.blockId}-${index}`}
              center={[lat, lng]}
              radius={4}
              pathOptions={{
                color: line.dashed ? colors.conditional : colors.route,
                fillColor: line.dashed ? colors.conditional : colors.route,
                fillOpacity: 1,
              }}
            >
              <Tooltip>{label}</Tooltip>
            </CircleMarker>
          ))
        )}
      </MapContainer>
      <p className="route-map__caption">
        An illustrative sketch of the planned route — not a fixed itinerary.
        The dashed teal leg through Russia is conditional on border access at
        the time; the dashed grey leg is the flight from China to San Diego.
      </p>
    </div>
  )
}
