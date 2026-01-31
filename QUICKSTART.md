# 🚀 Quick Start Guide

## Get Your Landing Page Live in 5 Minutes

### Step 1: Setup (1 minute)

```bash
# Navigate to project folder
cd heywartommylola-landing-page

# Install dependencies
npm install
```

### Step 2: Add Images (2 minutes)

Create the `/public/images/` folder and add these 12 images:

**Product Images:**
- liquid-soap.jpg
- air-freshener.jpg  
- hypo.jpg
- izal.jpg
- shampoo.jpg
- hair-cream.jpg

**Section Images:**
- hero-products.jpg
- manufacturing.jpg
- bulk-packaging.jpg
- nigeria-delivery.jpg
- customer-support.jpg

**Social Sharing:**
- og-image.jpg (1200×630px)

💡 **Don't have images yet?** The site will work with placeholder blurs until you add them.

### Step 3: Test Locally (1 minute)

```bash
# Start development server
npm run dev
```

Open http://localhost:3000 in your browser. Your landing page is now running!

### Step 4: Deploy (1 minute)

**Easiest Method - Vercel:**

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

✅ **Done! Your site is live!**

## What You Get

✨ **7 Professionally Designed Sections:**
1. Hero with animated CTA
2. About the brand
3. 6-product showcase grid
4. Bulk & souvenir production
5. Locations & delivery
6. Contact with social links
7. Professional footer

🎨 **Premium Features:**
- Smooth scroll animations
- Hover effects on all interactive elements
- Mobile-responsive design
- Fast loading with optimized images
- SEO-ready with all meta tags

📱 **Contact Integration:**
- WhatsApp click-to-chat: +2348104826527
- Phone call button: 08117447563
- Social media links (Instagram, TikTok, Facebook)

## Customization

### Update Contact Info

**In Hero.tsx (line 79):**
```typescript
<a href="https://wa.me/2348104826527">
```

**In ContactOrder.tsx (lines 15-22):**
```typescript
const contactMethods = [
  {
    value: '+234 810 482 6527',  // Update here
    link: 'https://wa.me/2348104826527',
  },
  // ...
];
```

### Change Colors

**In globals.css (lines 8-10):**
```css
--color-primary: 142 76% 36%;  /* Change the green hue */
```

### Update Products

**In Products.tsx (lines 14-47):**
```typescript
const products = [
  {
    name: 'Your Product Name',
    image: '/images/your-image.jpg',
    benefit: 'Your product benefit',
    // ...
  },
];
```

## File Structure

```
📁 Your Project
├── 📁 app/                 # Next.js pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Styles
├── 📁 components/          # React components
│   ├── sections/           # Page sections
│   └── ui/                 # UI components
├── 📁 public/              # Static files
│   └── images/             # Your images here
├── package.json            # Dependencies
└── README.md              # Full documentation
```

## Need Help?

📖 **Full Documentation:** See README.md
🚀 **Deployment Guide:** See DEPLOYMENT.md
🖼️ **Image Guide:** See IMAGE_GUIDE.md

**Contact:**
- WhatsApp: +234 810 482 6527
- Call: 0811 744 7563

---

**Your premium landing page is ready to go live! 🎉**
