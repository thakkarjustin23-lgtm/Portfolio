import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-noir-800/50 border border-gold-primary/20 rounded-3xl p-12 text-center hover:border-gold-primary/40 transition-all">
        <h2 className="text-4xl md:text-5xl font-urbanist font-bold text-text-primary mb-4">
          Got a stage, a team, or a challenge?
        </h2>
        
        <p className="text-text-muted mb-8 text-lg">
          Open to competitions, collaborations and conversations.
        </p>

        <a
          href="mailto:thakkarjustin23@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-primary text-noir-900 font-urbanist font-600 hover:bg-gold-soft transition-all group"
        >
          Reach out
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gold-primary/10 text-center">
        <p className="text-text-muted text-sm mb-4">
          © 2026 Justin Thakkar. All rights reserved.
        </p>
        <p className="text-text-muted text-sm font-urbanist font-600 tracking-widest uppercase">
          JT · GRADE X
        </p>
      </footer>
    </section>
  )
}

export default Contact
