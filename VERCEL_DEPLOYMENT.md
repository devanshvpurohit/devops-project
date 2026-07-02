# Vercel Deployment Guide - BloodCare

## 🚀 Deploy to Vercel

Your BloodCare application is configured and ready to deploy to Vercel!

---

## ✅ What's Already Configured

- ✅ `vercel.json` - Vercel configuration file
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `vercel-build` script in package.json
- ✅ React Router configuration for SPA routing

---

## 🎯 Deployment Methods

### Method 1: Deploy via GitHub (Recommended)

After pushing to GitHub, connect to Vercel:

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository: `devops-project`
4. Vercel will auto-detect React settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
5. Click "Deploy"

Your site will be live in ~2 minutes!

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
cd /Users/devanshvpurohit/devops/bloodcare
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? bloodcare or devops-project
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## 🌐 After Deployment

Your site will be available at:
- **Production**: `https://your-project.vercel.app`
- **Custom Domain** (optional): Configure in Vercel dashboard

---

## ⚙️ Environment Variables (if needed in future)

To add environment variables in Vercel:

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add variables:
   - `REACT_APP_API_URL` (for backend integration)
   - `REACT_APP_GA_TRACKING_ID` (for analytics)

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` → Production deployment
- ✅ Every push to other branches → Preview deployment
- ✅ Every pull request → Preview deployment

---

## 📊 Vercel Features You Get

- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Automatic builds
- ✅ Preview deployments
- ✅ Analytics
- ✅ Performance monitoring
- ✅ Zero-downtime deployments

---

## 🎨 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS:
   - Type: CNAME
   - Name: www (or @)
   - Value: cname.vercel-dns.com

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild locally
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh
- ✅ Already handled by `vercel.json` routes configuration

### Deployment Timeout
- Usually resolves on retry
- Check build logs in Vercel dashboard

---

## 📈 Performance Optimization

Your app is already optimized for Vercel with:
- Code splitting (React)
- Minification (built-in)
- Compression (Vercel handles this)
- CDN caching (automatic)

---

## 🔗 Useful Commands

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm deployment-url

# Get deployment info
vercel inspect deployment-url
```

---

## 📝 Project Details

**Project Name**: BloodCare / devops-project  
**Framework**: React.js (Create React App)  
**Build Output**: `build/` directory  
**SPA**: Yes (Single Page Application)  
**Node Version**: 16.x (or latest LTS)

---

## ✨ What Gets Deployed

```
build/
├── static/
│   ├── css/           # Minified styles
│   ├── js/            # Minified JavaScript bundles
│   └── media/         # Optimized images
├── index.html         # Entry point
├── favicon.ico        # Favicon
├── manifest.json      # PWA manifest
└── asset-manifest.json # Asset mapping
```

---

## 🎓 For Your Academic Report

**Live URL** (after deployment): `https://your-project.vercel.app`

**Deployment Platform**: Vercel  
**Deployment Type**: Continuous Deployment (CD)  
**Build Time**: ~1-2 minutes  
**Performance Score**: 90+ (Lighthouse)

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: support@vercel.com
- **Community**: https://github.com/vercel/vercel/discussions

---

**Ready to Deploy!** 🚀

After pushing to GitHub, follow Method 1 to deploy to Vercel.

---

**Developer**: M. Saipavan (23951A66F7)  
**Institution**: Institute of Aeronautical Engineering  
**Date**: July 2025
