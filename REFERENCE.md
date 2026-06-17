# Portfolio Structure Reference

## Complete File Tree

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Sticky header with nav
│   │   ├── Hero.tsx                # Hero section
│   │   ├── StatsBar.tsx            # 4-tile stats
│   │   ├─┠ Achievements.tsx        # Bento grid achievements
│   │   ├─┠ Story.tsx               # 2-column story
│   │   ├─┠ LinkedIn.tsx            # LinkedIn section
│   │   └─┠ Contact.tsx             # Contact & footer
│   ├── App.tsx                 # Main app container
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── public/                    # Static assets (images, icons)
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tsconfig.node.json         # Node TypeScript config
├── vite.config.ts             # Vite configuration
├── start.config.ts            # TanStack Start config
├── tailwind.config.js         # Tailwind theme
├── postcss.config.js          # PostCSS config
├─┠ README.md                  # Project overview
├─┠ SETUP.md                   # Setup instructions
├─┠ DEPLOYMENT.md              # Deployment guide
├─┠ DEVELOPMENT.md             # Development workflow
├┠ CONFIGURATION.md             # Advanced customization
└── .gitignore                 # Git ignore rules
```

## Component Hierarchy

```
App
├── Navigation
├── Hero
├── StatsBar
├── Achievements
│   └── AchievementCard (x8)
├── Story
├── LinkedIn
└── Contact
```

## Component Props Reference

### Navigation
```typescript
interface NavProps {
  onGetInTouch: () => void
}
```

### AchievementCard
```typescript
interface AchievementCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
  className?: string
  hasOrb?: boolean
}
```

### StatTile
```typescript
interface StatTileProps {
  value: string | number
  label: string
}
```

## Routing & Navigation

**Navigation Links:**
- `#achievements` → Achievements section
- `#story` → Story section
- `#linkedin` → LinkedIn section
- `#contact` → Contact section

**Scroll Behavior:**
- All navigation uses smooth scroll
- Mobile menu closes on link click
- Header remains sticky

## Tailwind Classes Used

### Colors
```
Background:    bg-noir-900, bg-noir-800
Text:          text-text-primary, text-text-muted
Accent:        text-gold-primary, text-gold-soft
Borders:       border-gold-primary/20, border-gold-primary/40
```

### Layout
```
Grid:          grid, grid-cols-2, md:grid-cols-4, md:grid-cols-6
Spacing:       p-6, px-6, py-20, gap-4, gap-8
Bento:         .bento-grid (custom CSS grid)
```

### Typography
```
Font Family:   font-urbanist, font-epilogue
Font Weight:   font-bold, font-600, font-400
Font Size:     text-xs, text-2xl, text-5xl, text-8xl
Tracking:      tracking-tight, tracking-widest
```

### Effects
```
Rounded:       rounded-full, rounded-3xl
Backdrop:      backdrop-blur-xl
Border:        border, border-gold-primary/20
Shadow:        shadow-lg, shadow-xl
Hover:         hover:border-gold-primary/40, hover:scale-[1.02]
Transition:    transition-all, transition-colors, duration-300
```

## Icon Library (Lucide React)

**Available Icons:**
- `Sparkles` - Flagship/shine
- `Trophy` - Awards/achievements
- `Rocket` - Innovation/launch
- `Mic` - Speaking/audio
- `Award` - Medals/competition
- `BookOpen` - Storytelling/literature
- `Zap` - Energy/quiz
- `MapPin` - Location/sports
- `Linkedin` - Social network
- `ArrowUpRight` - External link
- `Menu` - Mobile nav
- `X` - Close menu

## Custom Utilities

### Text Gradients
```css
.text-gold-gradient {
  background: linear-gradient(135deg, #c9a84c 0%, #f0d78c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Buttons
```css
.btn-gold {
  @apply px-6 py-3 rounded-full font-urbanist font-600 transition-all duration-300;
  background: linear-gradient(135deg, #c9a84c 0%, #f0d78c 100%);
  @apply text-noir-900 shadow-lg;
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.3);
}

.btn-gold:hover {
  @apply scale-[1.02] shadow-xl;
  box-shadow: 0 0 30px rgba(201, 168, 76, 0.5);
}
```

### Cards
```css
.card-hover {
  @apply border border-gold-primary/20 rounded-3xl transition-all duration-300;
}

.card-hover:hover {
  @apply border-gold-primary/40;
}
```

### Grid Background
```css
.grid-bg {
  background-image: linear-gradient(to right, rgba(201, 168, 76, 0.04) 1px, transparent 1px), 
                    linear-gradient(to bottom, rgba(201, 168, 76, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

## Data Structure

### Achievement Object
```typescript
interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
  gridClass: string
  hasOrb?: boolean
}
```

### Stats Object
```typescript
interface Stat {
  value: string | number
  label: string
}
```

## Environment Variables

**Optional (create `.env.local`):**
```
VITE_CONTACT_EMAIL=thakkarjustin23@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/justin-thakkar-309b05391/
VITE_SITE_URL=https://justinthakkar.com
VITE_GA_ID=your-analytics-id
```

## Performance Metrics

**Target scores:**
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100
- Core Web Vitals: All Green

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast (WCAG AA)
- Responsive typography
- Alt text for images

---

**Reference complete! 📚**
