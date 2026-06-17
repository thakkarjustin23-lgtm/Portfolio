import React from 'react'
import { Linkedin, ArrowUpRight } from 'lucide-react'

const LinkedIn: React.FC = () => {
  return (
    <section id="linkedin" className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-noir-800/50 border border-gold-primary/20 rounded-3xl p-12 text-center hover:border-gold-primary/40 transition-all group">
        <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-text-primary mb-4">
          Let's connect on LinkedIn
        </h2>
        
        <p className="text-text-muted mb-8 text-lg">
          Professional Profile
        </p>

        <a
          href="https://www.linkedin.com/in/justin-thakkar-309b05391/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-primary text-noir-900 font-urbanist font-600 hover:bg-gold-soft transition-all group/btn"
        >
          <Linkedin size={20} />
          View LinkedIn Profile
          <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}

export default LinkedIn
