import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import Home from '../Pages/Home/Home'
import Roadmap from '../Pages/Roadmap/Roadmap'
import Todolist from '../Pages/Todolist/Todolist'

import Italy from '../Pages/Italy/Italy'
import Roma from '../Pages/Italy/Roma/Roma'
import Perugia from '../Pages/Italy/Perugia/Perugia'

import Spain from '../Pages/Spain/Spain'
import Madrid from '../Pages/Spain/Madrid/Madrid'
import MRestaurants from '../Pages/Spain/Madrid/Restaurants'
import MPlaces from '../Pages/Spain/Madrid/Places'

import Barcelona from '../Pages/Spain/Barcelona/Barcelona'
import BRestaurants from '../Pages/Spain/Barcelona/Restaurants'
import BPlaces from '../Pages/Spain/Barcelona/Places'
import Footer from '../components/Footer'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/italy/roma" element={<Roma />} />
        <Route path="/italy/perugia" element={<Perugia />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/spain/madrid" element={<Madrid />} />
        <Route path="/spain/madrid/restaurants" element={<MRestaurants />} />
        <Route path="/spain/madrid/places" element={<MPlaces />} />
        <Route path="/spain/barcelona" element={<Barcelona />} />
        <Route path="/spain/barcelona/restaurans" element={<BRestaurants />} />
        <Route path="/spain/barcelona/places" element={<BPlaces />} />
      </Routes>
      <Footer />
    </Router>
  )
}
