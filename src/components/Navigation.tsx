import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavProps {
  onGetInTouch: () => void
}

const Navigation: React.FC<NavProps> = ({ onGetInTouch }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-noir-900/80 backdrop-blur-xl border-b border-gold-primary/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-urbanist font-bold text-text-primary">Justin<span className="text-gold-primary">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('achievements')} className="text-text-muted hover:text-gold-primary transition-colors">Achievements</button>
          <button onClick={() => scrollToSection('story')} className="text-text-muted hover:text-gold-primary transition-colors">Story</button>
          <button onClick={() => scrollToSection('linkedin')} className="text-text-muted hover:text-gold-primary transition-colors">LinkedIn</button>
          <button onClick={() => scrollToSection('contact')} className="text-text-muted hover:text-gold-primary transition-colors">Contact</button>
        </div>

        {/* CTA Button */}
        <button
          onClick={onGetInTouch}
          className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30 hover:border-gold-primary/60 text-gold-primary transition-all group"
        >
          Get in touch
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gold-primary/10 bg-noir-800/50 backdrop-blur">
          <div className="flex flex-col gap-4 p-6">
            <button onClick={() => scrollToSection('achievements')} className="text-text-muted hover:text-gold-primary transition-colors">Achievements</button>
            <button onClick={() => scrollToSection('story')} className="text-text-muted hover:text-gold-primary transition-colors">Story</button>
            <button onClick={() => scrollToSection('linkedin')} className="text-text-muted hover:text-gold-primary transition-colors">LinkedIn</button>
            <button onClick={() => scrollToSection('contact')} className="text-text-muted hover:text-gold-primary transition-colors">Contact</button>
            <button
              onClick={onGetInTouch}
              className="w-full py-2 rounded-full bg-gold-primary text-noir-900 font-urbanist font-600 hover:bg-gold-soft transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
