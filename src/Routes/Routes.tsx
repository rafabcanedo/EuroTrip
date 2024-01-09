import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import Home from '../Pages/Home/Home'
import Italy from '../Pages/Italy/Italy'
import Roma from '../Pages/Italy/Roma/Roma'
import Perugia from '../Pages/Italy/Perugia/Perugia'
import Roadmap from '../Pages/Roadmap/Roadmap'
import Spain from '../Pages/Spain/Spain'
import Madrid from '../Pages/Spain/Madrid/Madrid'
import Barcelona from '../Pages/Spain/Barcelona/Barcelona'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/italy/roma" element={<Roma />} />
        <Route path="/italy/perugia" element={<Perugia />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/spain/madrid" element={<Madrid />} />
        <Route path="/spain/barcelona" element={<Barcelona />} />
      </Routes>
    </Router>
  )
}
