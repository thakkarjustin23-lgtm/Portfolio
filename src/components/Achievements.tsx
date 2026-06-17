import React from 'react'
import { Sparkles, Trophy, Rocket, Mic, Award, BookOpen, Zap, MapPin } from 'lucide-react'

interface AchievementCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
  className?: string
  hasOrb?: boolean
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon,
  tag,
  className = '',
  hasOrb = false,
}) => {
  return (
    <div className={`relative bg-gradient-to-br from-noir-800/60 to-noir-900/80 border border-gold-primary/20 rounded-3xl p-8 hover:border-gold-primary/40 transition-all group overflow-hidden ${className}`}>
      {hasOrb && (
        <>
          <div className="blur-orb absolute -top-20 -right-20 w-60 h-60 -z-10"></div>
          <div className="blur-orb absolute -bottom-20 -left-20 w-60 h-60 -z-10 opacity-20"></div>
        </>
      )}

      {tag && (
        <div className="text-xs font-urbanist font-600 tracking-widest text-gold-primary uppercase mb-4">
          {tag}
        </div>
      )}

      <div className="text-gold-primary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="text-2xl md:text-3xl font-urbanist font-bold text-text-primary mb-3">
        {title}
      </h3>

      <p className="text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  )
}

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Junior Shark Tank',
      description: 'Pitched and won the school-level competition. Developed a viable startup concept and presented to judges.',
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      tag: 'Flagship',
      gridClass: 'md:col-span-3 md:row-span-2',
      hasOrb: true,
    },
    {
      title: 'RoboFest 5.0',
      description: 'Qualified for finals among top young roboticists. Showcased innovation in robotics and problem-solving.',
      icon: <Rocket size={32} strokeWidth={1.5} />,
      tag: 'Competition',
      gridClass: 'md:col-span-3 md:row-span-2',
      hasOrb: true,
    },
    {
      title: 'Public Speaking',
      description: 'Anchored in front of 10,000 people at age 10. Built confidence and communication skills on major stages.',
      icon: <Mic size={32} strokeWidth={1.5} />,
      gridClass: 'md:col-span-4',
    },
    {
      title: '6× Olympiad Medalist',
      description: 'Earned school-level medals across multiple Olympiad competitions in different subjects.',
      icon: <Award size={32} strokeWidth={1.5} />,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Traditional Storytelling',
      description: 'District Winner in traditional storytelling competition. Mastered the art of narrative and audience engagement.',
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'SBI Finance Quiz',
      description: 'Appeared and competed in prestigious SBI Finance Quiz competition at school and district level.',
      icon: <Zap size={32} strokeWidth={1.5} />,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Shot Put Champion',
      description: 'Taluka Level Winner in Shot Put. Combining athletic performance with competitive spirit.',
      icon: <div className="flex gap-2"><Trophy size={32} strokeWidth={1.5} /><MapPin size={24} strokeWidth={1.5} /></div>,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Keep showing up. Keep stacking wins.',
      description: '— Justin',
      icon: <div className="text-4xl text-gold-primary/30">"</div>,
      gridClass: 'md:col-span-2 italic',
    },
  ]

  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-urbanist font-bold mb-16 text-text-primary">
        Achievements
      </h2>

      <div className="bento-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className={achievement.gridClass}>
            <AchievementCard
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              tag={achievement.tag}
              hasOrb={achievement.hasOrb}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
