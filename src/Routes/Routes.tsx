import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Italy from '../Pages/Italy/Italy'
import France from '../Pages/France/France'
import Roma from '../Pages/Italy/Roma/Roma'
import Paris from '../Pages/France/Paris/Paris'
import { Navbar } from '../components/Navbar'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/italy/roma" element={<Roma />} />
        <Route path="/france" element={<France />} />
        <Route path="/france/paris" element={<Paris />} />
      </Routes>
    </Router>
  )
}
