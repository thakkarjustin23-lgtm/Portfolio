import React from 'react'
import { Sparkles, Trophy } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12 grid-bg">
      {/* Decorative Blur Orbs */}
      <div className="blur-orb absolute top-20 right-10 w-80 h-80 -z-10"></div>
      <div className="blur-orb absolute bottom-40 left-10 w-96 h-96 -z-10 opacity-20"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-primary"></div>
          <span className="text-xs font-urbanist font-600 tracking-widest text-gold-primary uppercase">Portfolio · Grade X · 2026</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold-primary"></div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-urbanist font-bold mb-6 leading-tight tracking-tight">
          Justin Thakkar<span className="text-gold-gradient">.</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-urbanist font-bold mb-6">
          <span className="text-text-primary">Builder. Speaker. </span>
          <span className="text-gold-gradient">Athlete.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-12">
          A 10th-grade student stacking wins across innovation, robotics, public speaking and sport — one stage at a time.
        </p>
      </div>
    </section>
  )
}

export default Hero
