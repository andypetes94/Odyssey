import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import RoutePage from "./pages/RoutePage.jsx"
import Tracker from "./pages/Tracker.jsx"
import Blog from "./pages/Blog.jsx"
import Donate from "./pages/Donate.jsx"
import About from "./pages/About.jsx"

export default function App() {
  return (
    <BrowserRouter basename="/Odyssey">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
