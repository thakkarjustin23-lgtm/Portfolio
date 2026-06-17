# Advanced Configuration Guide

## Customization Examples

### 1. Modify Hero Section

**File:** `src/components/Hero.tsx`

Change headline:
```jsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-urbanist font-bold mb-6 leading-tight tracking-tight">
  Your Name<span className="text-gold-gradient">.</span>
</h1>
```

Change subheading:
```jsx
<h2 className="text-2xl md:text-4xl font-urbanist font-bold mb-6">
  <span className="text-text-primary">Your Title. </span>
  <span className="text-gold-gradient">Your Focus.</span>
</h2>
```

### 2. Add New Achievement Card

**File:** `src/components/Achievements.tsx`

Add to achievements array:
```typescript
{
  title: 'Your Achievement',
  description: 'Achievement description goes here.',
  icon: <YourIcon size={32} strokeWidth={1.5} />,
  tag: 'Category',
  gridClass: 'md:col-span-2',
  hasOrb: false,
}
```

Available icons from lucide-react:
- `Sparkles`, `Trophy`, `Rocket`, `Mic`, `Award`
- `BookOpen`, `Zap`, `MapPin`, `Star`, `Target`
- `Zap`, `Flame`, `Shield`, `Lightning`, `Crown`

### 3. Change Color Theme

**File:** `tailwind.config.js`

Modify color palette:
```javascript
colors: {
  'noir': {
    900: '#1a1a1a',  // Background
    800: '#2d2d2d',  // Surface
  },
  'gold': {
    primary: '#ffd700',   // Primary accent
    soft: '#ffed4e',      // Secondary accent
  },
  'text': {
    primary: '#ffffff',   // Main text
    muted: '#cccccc',     // Secondary text
  },
}
```

### 4. Customize Font Family

**File:** `tailwind.config.js`

Add custom fonts:
```javascript
fontFamily: {
  'urbanist': ['Urbanist', 'sans-serif'],
  'epilogue': ['Epilogue', 'sans-serif'],
  'display': ['Poppins', 'sans-serif'],  // New
  'body': ['Inter', 'sans-serif'],       // New
}
```

**In components:**
```jsx
<h1 className="font-display text-5xl">Heading</h1>
<p className="font-body text-base">Body text</p>
```

### 5. Add Animation Effects

**File:** `src/index.css`

Add custom animations:
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
```

Use in components:
```jsx
<div className="animate-slide-in">
  Content
</div>
```

### 6. Add Images with Optimization

**Create:** `src/components/ImageComponent.tsx`

```typescript
import React from 'react'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

const OptimizedImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`rounded-3xl ${className}`}
    />
  )
}

export default OptimizedImage
```

Use:
```jsx
<OptimizedImage src="/image.jpg" alt="Description" className="w-full" />
```

### 7. Add Social Links

**File:** `src/components/Navigation.tsx`

Add social icons:
```jsx
import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { icon: Github, url: 'https://github.com/username' },
  { icon: Linkedin, url: 'https://linkedin.com/in/username' },
  { icon: Twitter, url: 'https://twitter.com/username' },
]

<div className="flex gap-4">
  {socials.map((social) => (
    <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
      <social.icon className="text-gold-primary hover:text-gold-soft transition-colors" />
    </a>
  ))}
</div>
```

### 8. Add Dark/Light Mode Toggle

**Create:** `src/hooks/useTheme.ts`

```typescript
import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return { isDark, toggleTheme }
}
```

**Use in Navigation:**
```jsx
const { isDark, toggleTheme } = useTheme()

<button onClick={toggleTheme}>
  {isDark ? <Sun /> : <Moon />}
</button>
```

### 9. Add Form for Contact

**Create:** `src/components/ContactForm.tsx`

```typescript
import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-noir-800 border border-gold-primary/20 rounded-lg p-3"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-noir-800 border border-gold-primary/20 rounded-lg p-3"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Your Message"
        className="w-full bg-noir-800 border border-gold-primary/20 rounded-lg p-3"
        rows={5}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit" className="btn-gold w-full">
        Send Message
      </button>
      {submitted && <p className="text-gold-primary">Message sent!</p>}
    </form>
  )
}

export default ContactForm
```

### 10. Add Blog Section

**Create:** `src/components/Blog.tsx`

```typescript
import React from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'My Journey to Shark Tank',
    excerpt: 'How I pitched my startup idea...',
    date: '2026-01-15',
    category: 'Innovation',
  },
  // Add more posts
]

const Blog: React.FC = () => {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-urbanist font-bold mb-12">Latest Posts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-noir-800/50 border border-gold-primary/20 rounded-3xl p-6 hover:border-gold-primary/40 transition-all">
            <p className="text-gold-primary text-sm uppercase mb-2">{post.category}</p>
            <h3 className="text-xl font-urbanist font-bold mb-3">{post.title}</h3>
            <p className="text-text-muted mb-4">{post.excerpt}</p>
            <p className="text-text-muted text-sm">{new Date(post.date).toLocaleDateString()}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
```

### 11. Add Analytics

**File:** `index.html`

Add Google Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 12. Add SEO Meta Tags

**File:** `index.html`

```html
<meta name="description" content="Justin Thakkar's Portfolio - Grade 10 Student, Innovator" />
<meta name="keywords" content="portfolio, innovation, robotics, public speaking" />
<meta property="og:title" content="Justin Thakkar - Portfolio" />
<meta property="og:description" content="Explore achievements in innovation, robotics, and athletics." />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Justin Thakkar - Portfolio" />
<meta name="twitter:description" content="Grade 10 student showcasing achievements." />
```

## Performance Optimizations

### Image Optimization

```bash
# Install image optimizer
npm install --save-dev imagemin imagemin-mozjpeg
```

### Code Splitting

```typescript
import { lazy, Suspense } from 'react'

const Blog = lazy(() => import('./components/Blog'))

<Suspense fallback={<div>Loading...</div>}>
  <Blog />
</Suspense>
```

### Bundle Analysis

```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [visualizer()],
})
```

## Environment-Specific Configs

**File:** `.env.example`

```
VITE_APP_NAME=Justin Thakkar Portfolio
VITE_CONTACT_EMAIL=thakkarjustin23@gmail.com
VITE_LINKEDIN_URL=https://linkedin.com/in/justin-thakkar
VITE_GA_ID=GA_MEASUREMENT_ID
```

**Use in components:**
```typescript
const email = import.meta.env.VITE_CONTACT_EMAIL
```

## TypeScript Strict Mode

**File:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## Component Testing

**Install Vitest:**
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

**Create test:** `src/components/__tests__/Navigation.test.tsx`

```typescript
import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<Navigation onGetInTouch={() => {}} />)
    expect(screen.getByText('Achievements')).toBeInTheDocument()
  })
})
```

---

**Customize away! 🚀**
