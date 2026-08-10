import { useTheme } from "../hooks/useTheme.js"
import "./ThemeToggle.css"

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  return (
    <fieldset className="theme-toggle" aria-label="Colour theme">
      <legend className="sr-only">Colour theme</legend>
      {[
        { value: "light", icon: "☼", label: "Light" },
        { value: "dark", icon: "☾", label: "Dark" },
      ].map((option) => (
        <label key={option.value} className="theme-toggle__option">
          <input
            type="radio"
            name="theme"
            value={option.value}
            checked={theme === option.value}
            onChange={() => setTheme(option.value)}
          />
          <span aria-hidden="true">{option.icon}</span>
          <span className="sr-only">{option.label}</span>
        </label>
      ))}
    </fieldset>
  )
}
