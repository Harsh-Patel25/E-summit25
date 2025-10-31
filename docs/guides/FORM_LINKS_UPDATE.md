# 📝 Google Form Links - Update Guide

## ✅ 3 Forms Needed for E-Summit 2025

### **Step 1: Create Your Google Forms**

Go to https://forms.google.com and create 3 forms:

---

### **Form 1: Main Event Registration** 🎫

**Fields to Include**:
```
1. Full Name * (Short answer)
2. Email * (Email)
3. Phone Number * (Short answer)
4. College/University * (Short answer)
5. Year of Study * (Multiple choice: 1st Year, 2nd Year, 3rd Year, 4th Year, Other)
6. Branch/Department (Short answer)
7. Why do you want to attend E-Summit? (Paragraph)
8. Dietary Preferences (Multiple choice: Veg, Non-Veg, No Preference)
```

**Settings**:
- ✅ Limit to 1 response
- ✅ Collect email addresses
- ✅ Response receipts: Always

**After Creating**:
- Click "Send" button
- Copy the form URL
- Paste in: `multipage/contact.html` - Line 106

---

### **Form 2: IPL Auction Registration** 🏏

**Fields to Include**:
```
1. Team Name * (Short answer)
2. Team Leader Name * (Short answer)
3. Team Leader Email * (Email)
4. Team Leader Phone * (Short answer)
5. Number of Team Members * (Multiple choice: 3, 4, 5)
6. Team Member 2 Name * (Short answer)
7. Team Member 3 Name * (Short answer)
8. Team Member 4 Name (Short answer - optional)
9. Team Member 5 Name (Short answer - optional)
10. College/University * (Short answer)
11. Previous experience with IPL-style auctions? (Multiple choice: Yes, No)
```

**Settings**:
- ✅ Limit to 1 response per team
- ✅ Collect email addresses

**After Creating**:
- Click "Send" button
- Copy the form URL
- Paste in: `multipage/competitions.html` - Line 109

---

### **Form 3: Squid Game Registration** 🎮

**Fields to Include**:
```
1. Participant Name * (Short answer)
2. Email * (Email)
3. Phone Number * (Short answer)
4. College/University * (Short answer)
5. Year of Study * (Multiple choice: 1st Year, 2nd Year, 3rd Year, 4th Year, Other)
6. Participation Type * (Multiple choice: Individual, With Team)
7. If Team - Team Name (Short answer - optional)
8. Number of Team Members (Multiple choice: 1, 2, 3, 4 - optional)
9. Have you watched Squid Game series? (Multiple choice: Yes, No)
```

**Settings**:
- ✅ Limit to 1 response
- ✅ Collect email addresses

**After Creating**:
- Click "Send" button
- Copy the form URL
- Paste in: `multipage/competitions.html` - Line 148

---

## 🔧 **Where to Update in Your Code**

### **File 1: `multipage/contact.html`**

**Line 106** - Main Registration Button:
```html
<!-- CURRENT (Line 106): -->
<a href="https://forms.google.com" target="_blank">

<!-- UPDATE TO: -->
<a href="YOUR_MAIN_REGISTRATION_FORM_URL_HERE" target="_blank">
```

**Example**:
```html
<a href="https://forms.google.com/d/e/1FAIpQLSd_YOUR_FORM_ID_HERE/viewform" target="_blank">
```

---

### **File 2: `multipage/competitions.html`**

**Line 109** - IPL Auction Registration:
```html
<!-- CURRENT (Line 109): -->
<a href="https://forms.google.com" target="_blank">

<!-- UPDATE TO: -->
<a href="YOUR_IPL_AUCTION_FORM_URL_HERE" target="_blank">
```

**Line 148** - Squid Game Registration:
```html
<!-- CURRENT (Line 148): -->
<a href="https://forms.google.com" target="_blank">

<!-- UPDATE TO: -->
<a href="YOUR_SQUID_GAME_FORM_URL_HERE" target="_blank">
```

---

## 🎯 **Quick Copy-Paste Template**

Once you create the forms, fill this template:

```
FORM LINKS (Keep this for reference):
=====================================

✅ Main Registration Form:
URL: https://forms.google.com/d/e/1FAIpQLSd_____________/viewform
File: multipage/contact.html
Line: 106

✅ IPL Auction Form:
URL: https://forms.google.com/d/e/1FAIpQLSd_____________/viewform
File: multipage/competitions.html
Line: 109

✅ Squid Game Form:
URL: https://forms.google.com/d/e/1FAIpQLSd_____________/viewform
File: multipage/competitions.html
Line: 148
```

---

## ✅ **Testing Checklist**

After updating all 3 links:

```
[ ] Open multipage/contact.html in browser
    [ ] Click "Register Now" button
    [ ] Verify form opens in new tab
    [ ] Test form submission

[ ] Open multipage/competitions.html in browser
    [ ] Click "Register for IPL Auction" button
    [ ] Verify form opens in new tab
    [ ] Test form submission
    
    [ ] Click "Register for Squid Game" button
    [ ] Verify form opens in new tab
    [ ] Test form submission

[ ] All 3 forms working correctly ✓
```

---

## ⚡ **Pro Tips**

### **Google Forms Settings**:
1. **Limit responses** - Prevent spam/duplicates
2. **Send confirmation email** - Let users know they registered
3. **View summary** - See total registrations
4. **Set closing date** - Auto-close on Nov 4th, 2025

### **Form Confirmation Message**:
```
"Thank you for registering for E-Summit 2025!

You'll receive a confirmation email shortly.

Event Details:
📅 Date: November 6-7, 2025
📍 Venue: SIT Mehsana, Gujarat
⏰ Time: 9:00 AM onwards

Follow us for updates:
Instagram: @ecell_sit
LinkedIn: E-Cell SIT

See you at E-Summit 2025! 🚀"
```

---

## 📊 **Form Response Management**

### **Track Registrations**:
1. Google Forms → Responses tab
2. See live count: "500 responses"
3. Download as Excel/CSV
4. Create email list for updates

### **Send Confirmation Emails**:
1. Forms → Settings → Presentation
2. Enable "Send respondents a copy of their responses"
3. Add custom confirmation message

### **Close Forms When Full**:
1. Forms → Settings → Responses
2. Enable "Limit to 1 response"
3. Set "Accepting responses" to OFF when seats full

---

## 🎉 **After You Update**

Once all 3 form links are updated:

✅ **Your website will be 95% launch-ready!**

Remaining tasks:
- Update speaker information
- Update contact details (email/phone)
- Final testing

**Time to complete**: 30-45 minutes total

---

**Need Help Creating Forms?** 
Follow this guide step by step and you'll have all 3 forms ready in 20 minutes! 🚀
