# Environment Setup Guide

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: For version control

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/thakkarjustin23-lgtm/Portfolio.git
cd Portfolio
```

### 2. Switch to Portfolio Branch

```bash
git checkout portfolio-website
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 19
- TanStack Start
- Tailwind CSS v4
- Lucide React
- TypeScript
- Development tools

### 4. Run Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### 6. Preview Production Build

```bash
npm run preview
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Add to `package.json`:
```json
{
  "homepage": "https://thakkarjustin23-lgtm.github.io/Portfolio"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Option 2: Vercel

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects TanStack Start
3. Deploy with one click

### Option 3: Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Option 4: Traditional Hosting (Apache, Nginx)

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to your web server

3. Configure server for SPA (single-page application):

**For Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**For Apache (.htaccess):**
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Environment Variables

Create a `.env` file in the root directory (if needed for future features):

```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=thakkarjustin23@gmail.com
```

## Troubleshooting

### Port Already in Use

```bash
# Use different port
VITE_PORT=3000 npm run dev
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors

```bash
# Clear build cache
rm -rf dist
npm run build
```

## Performance Optimization

- Production build is automatically minified and optimized
- Images are lazy-loaded where applicable
- CSS is tree-shaken by Tailwind
- JavaScript is code-split for faster loading

## Development Tips

- Use `npm run lint` to check code quality
- Keep dev server running while developing
- Components reload automatically (HMR)
- Tailwind classes are intelligently generated

## File Structure During Development

```
Portfolio/
├── src/
│   ├── components/          # React components
│   ├── App.tsx              # Main app
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── dist/                    # Build output (generated)
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind config
├── vite.config.ts           # Vite config
└── README.md                # Documentation
```

## Next Steps

1. Customize the portfolio with your own content
2. Add images/media to `/public` directory
3. Deploy to your preferred hosting platform
4. Set up a custom domain
5. Enable HTTPS
6. Monitor performance with web vitals

## Support

For issues or questions:
- Check the README.md
- Review component documentation
- Check Tailwind CSS docs: https://tailwindcss.com
- React docs: https://react.dev

---

**Happy coding! 🚀**
