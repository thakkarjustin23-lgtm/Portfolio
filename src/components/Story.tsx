import React from 'react'

const Story: React.FC = () => {
  return (
    <section id="story" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl font-urbanist font-bold text-text-primary leading-tight">
            Curious by default.
            <br />
            <span className="text-gold-gradient">Competitive by habit.</span>
          </h2>
        </div>

        {/* Right Column - Story Paragraphs */}
        <div className="space-y-8">
          <p className="text-lg text-text-muted leading-relaxed">
            I'm Justin — a Grade 10 student who chases stages, podiums and big ideas. Whether it's pitching a startup, programming a robot, or launching a shot put, I love testing how far I can push.
          </p>

          <p className="text-lg text-text-muted leading-relaxed">
            Each medal, each microphone, each finals call is a checkpoint — not a finish line. There's much more to build.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
