# Deployment Guide
## BloodCare - Blood Bank Management System

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Building for Production](#building-for-production)
3. [Deployment Options](#deployment-options)
4. [Environment Configuration](#environment-configuration)
5. [Post-Deployment](#post-deployment)

---

## Prerequisites

Before deploying, ensure you have:
- Node.js (v14 or higher) installed
- npm (v6 or higher) installed
- Git installed and configured
- GitHub account (for repository hosting)
- Deployment platform account (Netlify, Vercel, or GitHub Pages)

---

## Building for Production

### 1. Clean Install Dependencies

```bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Fresh install
npm install
```

### 2. Run Tests (when available)

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### 3. Build Production Bundle

```bash
# Create optimized production build
npm run build
```

This creates a `build/` directory with:
- Minified JavaScript bundles
- Optimized CSS files
- Compressed assets
- Service worker (if configured)

### 4. Test Production Build Locally

```bash
# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build

# Open http://localhost:3000 to test
```

---

## Deployment Options

### Option 1: Netlify (Recommended)

#### Method A: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init

# Deploy to production
netlify deploy --prod
```

#### Method B: Deploy via GitHub Integration

1. Push code to GitHub:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. Connect to Netlify:
- Go to https://app.netlify.com
- Click "New site from Git"
- Choose GitHub and authorize
- Select your repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `build`
- Click "Deploy site"

#### Method C: Drag and Drop

1. Build the project:
```bash
npm run build
```

2. Go to https://app.netlify.com/drop
3. Drag the `build/` folder to the upload area
4. Your site will be live instantly!

### Option 2: Vercel

#### Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Deploy via GitHub Integration

1. Go to https://vercel.com
2. Click "Import Project"
3. Import from GitHub
4. Select your repository
5. Configure:
   - Framework: Create React App
   - Build command: `npm run build`
   - Output directory: `build`
6. Click "Deploy"

### Option 3: GitHub Pages

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add these lines to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/bloodcare",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

#### Step 3: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/bloodcare`

### Option 4: AWS S3 + CloudFront

#### Prerequisites
- AWS Account
- AWS CLI installed and configured

#### Deploy to S3

```bash
# Build the project
npm run build

# Create S3 bucket
aws s3 mb s3://bloodcare-app

# Upload build files
aws s3 sync build/ s3://bloodcare-app

# Make bucket public
aws s3 website s3://bloodcare-app --index-document index.html --error-document index.html
```

#### Configure CloudFront (Optional)
- Create CloudFront distribution
- Point to S3 bucket
- Configure custom domain
- Enable HTTPS

---

## Environment Configuration

### Create Environment Files

#### .env.production

```bash
# API Configuration (for future backend integration)
REACT_APP_API_URL=https://api.bloodcare.com

# Analytics
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature Flags
REACT_APP_ENABLE_NOTIFICATIONS=true
REACT_APP_ENABLE_ANALYTICS=true

# App Configuration
REACT_APP_VERSION=$npm_package_version
REACT_APP_BUILD_DATE=$(date +%Y-%m-%d)
```

### Environment Variables by Platform

#### Netlify
```bash
# Via Netlify CLI
netlify env:set REACT_APP_API_URL https://api.bloodcare.com

# Or via Dashboard:
# Site settings → Environment variables → Add variable
```

#### Vercel
```bash
# Via Vercel CLI
vercel env add REACT_APP_API_URL production

# Or via Dashboard:
# Project settings → Environment Variables
```

---

## Domain Configuration

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., bloodcare.com)
4. Follow DNS configuration instructions

### Custom Domain on Vercel

1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

---

## SSL/HTTPS Configuration

### Netlify
- SSL is automatic and free (Let's Encrypt)
- Enabled by default for all sites
- Force HTTPS in Site settings → Domain management

### Vercel
- SSL is automatic and free
- Enabled by default
- Automatically renews certificates

### GitHub Pages
- Enable HTTPS in repository Settings → Pages
- Check "Enforce HTTPS"

---

## Performance Optimization

### 1. Code Splitting

Already implemented in React. To enhance:

```javascript
// Use lazy loading for routes
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));

// In App.js
<Suspense fallback={<div>Loading...</div>}>
  <Route path="/" element={<Home />} />
</Suspense>
```

### 2. Asset Optimization

```bash
# Compress images (install imagemin)
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant

# Create script in package.json
"optimize-images": "imagemin src/assets/images/* --out-dir=src/assets/images-optimized"
```

### 3. Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Analyze bundle
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

---

## Post-Deployment

### 1. Verify Deployment

```bash
# Check if site is live
curl -I https://your-site-url.com

# Check for broken links
npx broken-link-checker https://your-site-url.com
```

### 2. Performance Testing

Use these tools:
- Google Lighthouse (in Chrome DevTools)
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### 3. SEO Configuration

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://your-site-url.com/sitemap.xml
```

Update `public/index.html`:

```html
<head>
  <meta name="description" content="BloodCare - Modern Blood Bank Management System">
  <meta name="keywords" content="blood bank, blood donation, donor registration">
  <meta property="og:title" content="BloodCare">
  <meta property="og:description" content="Blood Bank Management System">
  <meta property="og:image" content="%PUBLIC_URL%/og-image.jpg">
</head>
```

### 4. Monitoring Setup

#### Google Analytics (Optional)

```bash
# Install react-ga
npm install react-ga4

# In src/index.js
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
ReactGA.send("pageview");
```

#### Error Tracking with Sentry (Optional)

```bash
# Install Sentry
npm install @sentry/react

# In src/index.js
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

---

## Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        CI: false
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './build'
        production-deploy: true
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Rollback Procedure

### Netlify
1. Go to Deploys tab
2. Find previous deployment
3. Click "Publish deploy"

### Vercel
1. Go to Deployments tab
2. Find stable deployment
3. Click "Promote to Production"

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push -f origin main
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Check for errors
npm run build
```

### 404 Errors on Refresh

Add `_redirects` file in `public/` directory:

```
/* /index.html 200
```

For Vercel, create `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Audit security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup Strategy

1. Regular GitHub commits
2. Tag releases:
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

---

## Checklist

Pre-Deployment:
- [ ] All features tested locally
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Accessibility tested
- [ ] Performance optimized
- [ ] Environment variables configured
- [ ] Build succeeds without errors

Post-Deployment:
- [ ] Site is accessible
- [ ] All pages load correctly
- [ ] Links work properly
- [ ] Forms submit successfully
- [ ] Mobile view works
- [ ] SSL certificate active
- [ ] Analytics tracking (if enabled)
- [ ] Monitoring setup

---

**Last Updated**: July 2025  
**Maintained By**: M. Saipavan (23951A66F7)  
**Institution**: Institute of Aeronautical Engineering
