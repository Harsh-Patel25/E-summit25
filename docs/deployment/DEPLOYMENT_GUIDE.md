# Deployment Guide - E-Summit 2025 Website

## Overview
This guide provides step-by-step instructions to deploy the E-Summit 2025 website to various hosting platforms.

---

## Pre-Deployment Checklist

Before deploying, ensure you have completed the following:

- [x] All website sections are complete and tested
- [x] Replace `index.html` with `index_complete.html` (rename it to `index.html`)
- [ ] Update Google Form links in the following locations:
  - Registration section (`#registration`)
  - IPL Auction competition card
  - Squid Game competition card
- [ ] Replace placeholder speaker information with actual speaker details
- [ ] Update contact information (email, phone, social media links)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Verify countdown timer is working

---

## File Structure

Ensure your project has the following structure:

```
E-Summit-2025/
├── index.html              (Rename index_complete.html to this)
├── assets/
│   └── js/
│       └── main.js
├── README.md
├── package.json
├── .gitignore
├── SRS_Document.md
├── Task_Division_Plan.md
└── DEPLOYMENT_GUIDE.md
```

---

## Option 1: Deploy to Netlify (Recommended)

### Step 1: Prepare Your Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - E-Summit 2025 website"

# Create GitHub repository and push
git remote add origin https://github.com/your-username/e-summit-2025.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. **Sign Up/Login**
   - Go to https://www.netlify.com/
   - Sign up using GitHub account

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify

3. **Configure Build Settings**
   - Select your repository: `e-summit-2025`
   - Branch to deploy: `main`
   - Build command: (leave empty)
   - Publish directory: `/` (root)

4. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete (1-2 minutes)

5. **Custom Domain (Optional)**
   - Go to "Domain settings"
   - Add custom domain: `esummit2025.yourdomain.com`
   - Follow DNS configuration instructions

6. **SSL Certificate**
   - Netlify automatically provisions SSL certificate
   - Your site will be available at `https://your-site-name.netlify.app`

---

## Option 2: Deploy to Vercel

### Step 1: Prepare Repository
Follow the same git setup as above.

### Step 2: Deploy on Vercel

1. **Sign Up/Login**
   - Go to https://vercel.com/
   - Sign up using GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure Project**
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment (1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

---

## Option 3: Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/e-summit-2025.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Click "Save"

### Step 3: Access Your Site
- Your site will be available at: `https://your-username.github.io/e-summit-2025/`
- Wait 2-3 minutes for first deployment

---

## Option 4: Deploy Locally (Testing)

### Using Python HTTP Server
```bash
# Navigate to project directory
cd E-Summit-2025

# Python 3
python -m http.server 8000

# Open browser
# http://localhost:8000
```

### Using Node.js HTTP Server
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project directory
cd E-Summit-2025

# Start server
http-server -p 8000

# Open browser
# http://localhost:8000
```

### Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at `http://127.0.0.1:5500`

---

## Post-Deployment Tasks

### 1. Test the Deployed Site

✅ **Navigation Testing**
- Click all navigation links
- Test mobile menu
- Verify smooth scrolling

✅ **Functionality Testing**
- Countdown timer working
- Day 1/Day 2 tab switching
- Scroll reveal animations
- Hover effects on cards

✅ **Forms and Links**
- Registration button opens Google Form
- Competition registration links work
- Social media links open correctly
- Email links (mailto:) function properly

✅ **Responsive Testing**
Test on multiple devices:
- Desktop (1920x1080, 1366x768)
- Tablet (iPad, Android tablets)
- Mobile (iPhone, Android phones)

✅ **Browser Testing**
- Chrome
- Firefox
- Safari
- Edge

### 2. Performance Optimization

Run Lighthouse audit in Chrome DevTools:
```
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance", "Accessibility", "SEO"
4. Click "Analyze page load"
```

Target Scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

### 3. SEO Optimization

Update `index.html` meta tags with actual information:
```html
<meta property="og:url" content="https://your-actual-domain.com">
<meta property="og:image" content="https://your-domain.com/assets/images/og-image.jpg">
```

### 4. Analytics Setup (Optional)

Add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Updating the Website

### For Netlify/Vercel (Git-based deployment)
```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Update content"
git push origin main

# Automatic deployment will trigger
# Site updates in 1-2 minutes
```

### For GitHub Pages
```bash
git add .
git commit -m "Update content"
git push origin main

# Wait 2-3 minutes for deployment
```

---

## Custom Domain Setup

### DNS Configuration

Add the following DNS records with your domain provider:

**For Netlify:**
- Type: CNAME
- Name: `esummit` or `www`
- Value: `your-site.netlify.app`

**For Vercel:**
- Type: CNAME
- Name: `esummit` or `www`
- Value: `cname.vercel-dns.com`

**For GitHub Pages:**
- Type: CNAME
- Name: `esummit` or `www`
- Value: `your-username.github.io`

---

## Troubleshooting

### Issue: Countdown Timer Not Working
**Solution:** Ensure `main.js` is loaded correctly. Check browser console for errors.

### Issue: Mobile Menu Not Opening
**Solution:** Verify Font Awesome CSS is loaded. Check JavaScript console for errors.

### Issue: Images Not Loading
**Solution:** 
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify image names match exactly (case-sensitive)

### Issue: Forms Not Submitting
**Solution:** 
- Check Google Form links are correct
- Ensure links open in new tab (`target="_blank"`)
- Verify Form is published and accepting responses

### Issue: Slow Page Load
**Solution:**
- Optimize images (use TinyPNG or Squoosh)
- Enable Gzip compression on hosting
- Minimize CSS/JS files
- Use lazy loading for images

---

## Security Best Practices

1. **HTTPS Only**
   - All major platforms provide free SSL
   - Ensure HTTPS is enabled

2. **No Sensitive Data**
   - Never commit API keys or passwords
   - Use environment variables if needed

3. **Form Security**
   - Use Google Forms (built-in spam protection)
   - Add reCAPTCHA if using custom forms

4. **Content Security Policy**
   - Already configured in meta tags
   - Review and update as needed

---

## Maintenance Schedule

### Weekly Tasks
- Check registration form responses
- Monitor website uptime
- Review any error reports

### Monthly Tasks
- Update content if needed
- Check for broken links
- Review analytics data
- Update speaker information

### Before Event
- Test all functionalities
- Update countdown timer date
- Final content review
- Backup current version

---

## Support & Resources

### Documentation
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Contact
For technical support, contact:
- **Web Team Lead**: [name@email.com]
- **E-Cell Technical Team**: [ecell.tech@sit.edu]

---

## Checklist Before Going Live

- [ ] Replace `index.html` with complete version
- [ ] Update all Google Form links
- [ ] Add actual speaker information
- [ ] Update contact details
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Configure custom domain (if applicable)
- [ ] Enable HTTPS
- [ ] Test all links and forms
- [ ] Add Google Analytics (optional)
- [ ] Create backup of current version
- [ ] Announce launch on social media

---

## Quick Deploy Commands

```bash
# First time setup
git init
git add .
git commit -m "E-Summit 2025 - Initial deployment"
git branch -M main
git remote add origin https://github.com/your-org/e-summit-2025.git
git push -u origin main

# Future updates
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

---

**Deployment completed!** 🎉

Your E-Summit 2025 website is now live and ready to inspire aspiring entrepreneurs!

---

*Last Updated: October 2025*
*Version: 1.0*
