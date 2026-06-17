# Development Workflow

## Branch Strategy

```
main (production)
├── portfolio-website (development)
│   ├── feature/achievements
│   ├── feature/animations
│   └── feature/mobile-optimization
```

## Making Changes

### 1. Create a Feature Branch

```bash
git checkout portfolio-website
git pull origin portfolio-website
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

```bash
# Start development server
npm run dev

# Edit files in src/
# Changes auto-reload
```

### 3. Commit and Push

```bash
git add .
git commit -m "feat: describe your changes"
git push origin feature/your-feature-name
```

### 4. Create Pull Request

1. Go to GitHub
2. Create PR from your branch to `portfolio-website`
3. Add description
4. Request review if needed
5. Merge when approved

## Component Development

### Creating a New Component

**File:** `src/components/MyComponent.tsx`

```typescript
import React from 'react'

interface MyComponentProps {
  // Define props
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="">
      {/* Component content */}
    </div>
  )
}

export default MyComponent
```

### Using New Component

In `src/App.tsx`:

```typescript
import MyComponent from './components/MyComponent'

// Use in JSX
<MyComponent />
```

## Styling Guide

### Tailwind Classes

```jsx
<div className="bg-noir-900 text-gold-primary rounded-3xl p-8 hover:border-gold-primary/40 transition-all">
  {/* Content */}
</div>
```

### Custom CSS

Edit `src/index.css` for custom styles:

```css
.my-custom-class {
  @apply bg-noir-800 border border-gold-primary/20 rounded-3xl;
}
```

### Color System

```
Background:  bg-noir-900, bg-noir-800
Text:        text-text-primary, text-text-muted
Accent:      text-gold-primary, text-gold-soft
Borders:     border-gold-primary/20
```

## Testing Locally

### Mobile Testing

```bash
# Development server
npm run dev

# Access from phone on same network
# http://YOUR_IP:5173
```

### Browser Compatibility

Test in:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

### Performance

```bash
# Build and preview
npm run build
npm run preview

# Use Chrome DevTools Performance tab
```

## Code Style

### TypeScript

- Always type props
- Use interfaces for component props
- Export components as default

### React

- Functional components only
- Use hooks for state
- Memoize when needed

### Tailwind

- Prefer utility classes
- Use theme colors
- Responsive-first approach

## Common Tasks

### Update Achievement Card

**File:** `src/components/Achievements.tsx`

```typescript
{
  title: 'Achievement Title',
  description: 'Achievement description',
  icon: <IconName size={32} strokeWidth={1.5} />,
  tag: 'Optional Tag',
  gridClass: 'md:col-span-X md:row-span-Y',
  hasOrb: true/false
}
```

### Change Color Palette

**File:** `tailwind.config.js`

```javascript
colors: {
  'noir': {
    900: '#newColor',
  },
  'gold': {
    primary: '#newColor',
  }
}
```

### Add New Section

1. Create component: `src/components/NewSection.tsx`
2. Add to App: `src/App.tsx`
3. Style with Tailwind
4. Add ID for navigation: `id="new-section"`

### Modify Navigation Links

**File:** `src/components/Navigation.tsx`

Add new link:
```jsx
<button onClick={() => scrollToSection('new-section')} 
  className="text-text-muted hover:text-gold-primary transition-colors">
  New Link
</button>
```

## Debugging

### React DevTools

Chrome extension for React debugging:
- Component tree inspection
- Props/state monitoring
- Performance profiling

### Browser Console

```javascript
// Check in console
console.log('Debug info')
```

### Tailwind Issues

```bash
# Clear Tailwind cache
rm -rf .next node_modules/.cache
npm run dev
```

## Performance Tips

- Use React.memo for expensive components
- Lazy load images
- Code split large sections
- Monitor bundle size

## Git Tips

```bash
# View changes
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo changes to file
git checkout -- filename

# View commit history
git log --oneline
```

## Deployment from Dev

```bash
# Merge to main
git checkout main
git pull
git merge portfolio-website
git push origin main

# GitHub Pages auto-deploys
```

---

**Happy developing! 🚀**
