import React from 'react'

interface StatTileProps {
  value: string | number
  label: string
}

const StatTile: React.FC<StatTileProps> = ({ value, label }) => {
  return (
    <div className="bg-noir-800/50 border border-gold-primary/20 rounded-3xl p-6 text-center hover:border-gold-primary/40 transition-all group">
      <div className="text-3xl md:text-4xl font-urbanist font-bold text-gold-primary mb-2 group-hover:scale-110 transition-transform">
        {value}
      </div>
      <p className="text-text-muted text-sm uppercase tracking-widest font-urbanist font-600">{label}</p>
    </div>
  )
}

const StatsBar: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatTile value="6" label="Olympiad Medals" />
        <StatTile value="10K" label="Audience Anchored" />
        <StatTile value="10" label="Age at First Stage" />
        <StatTile value="X" label="Current Grade" />
      </div>
    </section>
  )
}

export default StatsBar
