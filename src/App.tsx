import React, { useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Achievements from './components/Achievements'
import Story from './components/Story'
import LinkedIn from './components/LinkedIn'
import Contact from './components/Contact'

function App() {
  const contactRef = useRef<HTMLDivElement>(null)

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-noir-900 text-text-primary">
      <Navigation onGetInTouch={handleGetInTouch} />
      <Hero />
      <StatsBar />
      <Achievements />
      <Story />
      <LinkedIn />
      <Contact />
    </div>
  )
}

export default App
