export const friends = [
  {
    name: "Andy",
    home: "Galway, Ireland",
    blurb:
      "Drew the route, built this website, and will remind you of both at every opportunity. Certified legend — self-certified, but certified nonetheless.",
  },
  {
    name: "Timmy",
    home: "Ireland",
    blurb:
      "Never met a tenth pint he didn't like. Officially here to cycle; unofficially on a 15-month pub crawl with occasional bikes attached.",
  },
  {
    name: "Ruairi",
    home: "Ireland",
    blurb:
      "Speaks fluent Irish-mumble, understood by absolutely nobody outside a 20km radius of home. We're bringing a translator app for Ruairi, not for the locals.",
  },
  {
    name: "Richie",
    home: "Ireland",
    blurb:
      "Falls in love roughly once per border crossing. Expect a heartfelt paragraph about 'the one' from every single country on the route.",
  },
]

// Single source of truth for the departure date — every block's displayed
// month range is computed from this, so a future date change is a one-line fix.
export const TRIP_START = new Date(2028, 2, 1) // 1 March 2028
export const TRIP_START_LABEL = "1 March 2028"

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function addWeeks(date, weeks) {
  const next = new Date(date)
  next.setDate(next.getDate() + Math.round(weeks * 7))
  return next
}

function formatMonthRange(start, end) {
  const startLabel = MONTH_NAMES[start.getMonth()]
  const endLabel = MONTH_NAMES[end.getMonth()]
  const startYear = start.getFullYear()
  const endYear = end.getFullYear()
  if (startLabel === endLabel && startYear === endYear) return `${startLabel} ${startYear}`
  if (startYear === endYear) return `${startLabel} – ${endLabel} ${startYear}`
  return `${startLabel} ${startYear} – ${endLabel} ${endYear}`
}

// planningWeeks is a single representative estimate (the midpoint of each
// block's duration range) used only to lay out an approximate calendar —
// the displayed "duration" text keeps the honest range.
const BLOCK_DEFS = [
  {
    id: "galway-istanbul",
    title: "Galway → Istanbul",
    duration: "~10–12 weeks",
    planningWeeks: 11,
    summary:
      "Ireland → UK → France → Belgium → Netherlands/Germany → Bavaria → Austria → Slovenia → Croatia → Serbia → Bulgaria → Turkey. Deliberately slow, with multi-day stops in London, Bruges, Munich, Salzburg, Ljubljana, Zagreb, Belgrade and Sofia.",
    countries: ["IE", "UK", "FR", "BE", "NL", "DE", "AT", "SI", "HR", "RS", "BG", "TR"],
  },
  {
    id: "istanbul-georgia",
    title: "Istanbul → Georgia",
    duration: "~5 weeks",
    planningWeeks: 5,
    summary:
      "Istanbul → Bursa → Ankara → Cappadocia → Kayseri → Sivas → Erzincan → Erzurum → Kars → Georgia. The inland Anatolian route rather than the coast, with several days around Cappadocia.",
    countries: ["TR", "GE"],
  },
  {
    id: "georgia-kazakhstan",
    title: "Georgia → Kazakhstan",
    duration: "~2 months",
    planningWeeks: 8.5,
    summary:
      "10–14 days in Georgia (Kars → Batumi → Kutaisi → Tbilisi → Kazbegi, maybe Svaneti), then a route that depends on the border situation at the time: either via Russia and Astrakhan, or a southern route bypassing Russia and Azerbaijan.",
    countries: ["GE", "RU", "KZ"],
    conditional: true,
  },
  {
    id: "kazakhstan",
    title: "Across Kazakhstan",
    duration: "~3–8 weeks",
    planningWeeks: 5.5,
    summary:
      "Atyrau/Aktau → Aral Sea → Turkistan → Shymkent → Taraz → Almaty. Wild camping, long empty distances, no need to rush.",
    countries: ["KZ"],
  },
  {
    id: "china",
    title: "Kazakhstan → Xinjiang, China",
    duration: "~1 month",
    planningWeeks: 4.3,
    summary:
      "Cross at Khorgos → Yining → Sayram Lake → Urumqi → Turpan → Hami → Dunhuang. A strategic, exploratory stop rather than a cross-country slog.",
    countries: ["KZ", "CN"],
  },
  {
    id: "usa",
    title: "San Diego → Boston",
    duration: "~3–4 months",
    planningWeeks: 15,
    summary:
      "Fly China → San Diego with a recovery buffer, then the Adventure Cycling Southern Tier (San Diego → Tempe → El Paso → Texas → Louisiana → New Orleans → Florida), continuing up the coast through Savannah, Charleston, Washington DC, Philadelphia, NYC and on to Boston.",
    countries: ["US"],
  },
]

let cursor = TRIP_START
export const blocks = BLOCK_DEFS.map((block) => {
  const start = cursor
  const end = addWeeks(start, block.planningWeeks)
  cursor = end
  return { ...block, months: formatMonthRange(start, end) }
})

export const stats = {
  kmRidden: 0,
  countriesCrossed: 0,
  elevationM: 0,
  daysOnTheRoad: 0,
  fundsRaisedEUR: 0,
  fundsGoalEUR: 10000,
}

export const posts = [
  {
    id: "welcome",
    title: "Why we're doing this",
    author: "Andy",
    date: "Not yet published",
    excerpt:
      "Once the bikes are packed and the route is locked in, this is where the four of us will post updates from the road — photos, stories, and the occasional rant about headwinds.",
    placeholder: true,
  },
]
