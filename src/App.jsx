import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  // Show the loader on every visit and on every page refresh.
  const [loading, setLoading] = useState(true)

  const finishLoading = () => setLoading(false)

  return (
    <>
      {loading && <Loader onComplete={finishLoading} />}
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}
