# Quick Start Guide - E-Summit 2025 Website

## ⚡ 5-Minute Setup

### Step 1: Rename Main File
```bash
# In your project folder
# Rename index_complete.html to index.html
# (Delete or backup the old index.html first)
```

### Step 2: Update Form Links
Open `index.html` and replace these placeholder links with your actual Google Form URLs:

1. **Main Registration Form** (Line ~214):
   ```html
   <a href="https://forms.google.com" target="_blank">
   ```
   Replace with: `https://forms.google.com/your-actual-registration-form`

2. **IPL Auction Registration** (Line ~177):
   ```html
   <a href="https://forms.google.com" target="_blank">
   ```
   Replace with: `https://forms.google.com/your-ipl-auction-form`

3. **Squid Game Registration** (Line ~187):
   ```html
   <a href="https://forms.google.com" target="_blank">
   ```
   Replace with: `https://forms.google.com/your-squid-game-form`

### Step 3: Test Locally
```bash
# Option 1: Python
python -m http.server 8000
# Open: http://localhost:8000

# Option 2: Node.js
npx http-server -p 8000
# Open: http://localhost:8000
```

### Step 4: Deploy to Netlify (Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "E-Summit 2025 website"
git branch -M main
git remote add origin https://github.com/your-username/e-summit-2025.git
git push -u origin main
```

2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Click "Deploy site"
6. Done! Your site is live 🎉

---

## 📝 What to Update Before Launch

### Required Updates:
- [ ] Replace all Google Form links (3 places)
- [ ] Update email: `ecell@sit.edu` → your actual email
- [ ] Add social media links (Instagram, LinkedIn, Facebook)
- [ ] Replace speaker placeholders with actual speaker info
- [ ] Test countdown timer (should count to Nov 6, 2025)

### Optional Updates:
- [ ] Add actual speaker photos
- [ ] Update contact phone number
- [ ] Add Google Maps embed for venue
- [ ] Add event photos/images
- [ ] Setup Google Analytics

---

## 🎨 Customization Tips

### Change Colors
Edit the CSS in `<style>` section:
```css
.gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
/* Change #667eea and #764ba2 to your brand colors */
```

### Update Event Details
All text is in `index.html` - search and replace:
- Event dates
- Venue information
- Competition details
- Workshop information

---

## 🚀 All Files Overview

```
E-Summit-2025/
├── index_complete.html     ← RENAME THIS to index.html
├── index.html              ← (Old partial version - backup or delete)
├── components.html         ← (Reference file - not needed for deployment)
├── assets/
│   └── js/
│       └── main.js         ← JavaScript for interactivity
├── SRS_Document.md         ← Software Requirements (Reference)
├── Task_Division_Plan.md   ← Team planning (Reference)
├── DEPLOYMENT_GUIDE.md     ← Detailed deployment guide
├── QUICK_START.md          ← This file
├── README.md               ← Project overview
├── package.json            ← Project metadata
└── .gitignore              ← Git ignore rules
```

---

## 🔧 Troubleshooting

**Q: Countdown timer shows negative numbers?**  
A: Check the date in `main.js` - should be November 6, 2025

**Q: Mobile menu not working?**  
A: Make sure `main.js` is loaded. Check browser console for errors.

**Q: Forms not opening?**  
A: Verify Google Form links are correct and forms are published.

**Q: Site looks broken?**  
A: Check if Tailwind CSS CDN is loading. Check browser console.

---

## 📞 Need Help?

Check these files:
1. **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
2. **README.md** - Project overview
3. **SRS_Document.md** - Complete project specifications

---

## ✅ Pre-Launch Checklist

- [ ] Renamed `index_complete.html` to `index.html`
- [ ] Updated all 3 Google Form links
- [ ] Updated contact email and social media
- [ ] Tested on mobile phone
- [ ] Tested all navigation links
- [ ] Verified countdown timer works
- [ ] Checked all sections scroll smoothly
- [ ] Tested registration buttons
- [ ] Deployed to hosting platform
- [ ] Shared website link with team

---

**Your website is ready to launch!** 🚀

Share the link and start receiving registrations for E-Summit 2025!
