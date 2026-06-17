# Deployment Guide

## Pre-Deployment Checklist

- [ ] All content is accurate and up-to-date
- [ ] Links are working correctly
- [ ] Mobile responsiveness tested
- [ ] Performance optimized
- [ ] SEO meta tags configured
- [ ] Build completes without errors

## Step-by-Step Deployment

### 1. Build Locally

```bash
npm run build
```

Verify the `dist/` folder is created with all assets.

### 2. Test Production Build

```bash
npm run preview
```

Access at `http://localhost:4173` and verify everything works.

### 3. Choose Deployment Platform

#### GitHub Pages (Free)

**Setup:**
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch
4. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
5. Add to `package.json`:
   ```json
   {
     "homepage": "https://thakkarjustin23-lgtm.github.io/Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
6. Deploy:
   ```bash
   npm run deploy
   ```
7. Site will be live at: `https://thakkarjustin23-lgtm.github.io/Portfolio`

#### Vercel (Recommended - Zero Config)

**Setup:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import project
4. Click Deploy
5. Site will be live instantly

**Advantages:**
- Automatic deploys on push
- Free SSL certificate
- CDN included
- Serverless functions (if needed)
- Analytics included

#### Netlify

**Setup:**
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub
3. Select repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

**Features:**
- Automatic deployments
- Deploy previews for PRs
- Built-in analytics
- Form handling available

#### AWS Amplify

**Setup:**
1. Go to AWS Amplify Console
2. Connect GitHub repository
3. Configure build settings
4. Deploy

### 4. Custom Domain (Optional)

**For GitHub Pages:**
1. Go to Settings → Pages
2. Add custom domain
3. Update DNS records at your registrar:
   ```
   ALIAS/ANAME: portfolio.example.com -> thakkarjustin23-lgtm.github.io
   ```
4. Verify ownership

**For Vercel/Netlify:**
1. Go to project settings
2. Add domain
3. Update DNS at registrar
4. Wait for SSL certificate (usually 1-24 hours)

### 5. Enable HTTPS

Most platforms enable HTTPS automatically. Verify:
- [ ] Site loads over HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate is valid

### 6. Configure Analytics (Optional)

**Google Analytics:**
1. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

**Vercel Analytics:**
- Included automatically

## Post-Deployment

### Verify Deployment

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Links are functional
- [ ] Images load properly
- [ ] Mobile looks good
- [ ] Performance is acceptable

### Performance Testing

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### SEO Verification

- [ ] Meta description is set
- [ ] Open Graph tags configured
- [ ] Mobile-friendly design
- [ ] Structured data (if needed)
- [ ] Sitemap.xml (if needed)
- [ ] robots.txt (if needed)

## Continuous Deployment (CI/CD)

### GitHub Actions (Auto-Deploy to GitHub Pages)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - portfolio-website

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          branch: gh-pages
```

## Rollback Procedures

**If deployment goes wrong:**

**GitHub Pages:**
```bash
git revert <commit-hash>
git push origin portfolio-website
npm run deploy
```

**Vercel/Netlify:**
- Automatic rollback to previous deployment
- Available in deployment history

## Monitoring & Maintenance

### Regular Checks

- Monitor site uptime
- Check error logs
- Update dependencies monthly
- Test functionality after updates

### Update Dependencies

```bash
npm outdated              # Check for updates
npm update               # Update to latest compatible
npm audit               # Check security issues
npm audit fix           # Fix vulnerabilities
```

## Troubleshooting Deployment

### 404 on Refresh (SPA Issue)

**GitHub Pages:**
Add 404.html redirect (usually handled automatically)

**Netlify:**
Add `_redirects` file:
```
/* /index.html 200
```

**Vercel:**
Automatically configured for SPAs

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Slow Performance

- Optimize images
- Enable caching headers
- Use CDN
- Minimize JavaScript
- Compress CSS

## Security Checklist

- [ ] No sensitive data in code
- [ ] Environment variables properly configured
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] No XSS vulnerabilities
- [ ] Dependencies updated
- [ ] No console errors

---

**Your portfolio is now live! 🎉**
