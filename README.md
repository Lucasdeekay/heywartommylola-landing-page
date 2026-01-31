# Heywartommylola Liquid Products - Landing Page

A premium, image-driven, SEO-optimized landing page for Heywartommylola Liquid Products, built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## 🚀 Features

### Design & UX
- **Premium Design**: Modern, eco-inspired aesthetic with green color scheme
- **Distinctive Typography**: Sora for headings, DM Sans for body text (avoiding generic fonts)
- **Advanced Animations**: Framer Motion for scroll reveals, hover effects, and micro-interactions
- **Glassmorphism & Gradients**: Soft glass effects, gradient meshes, and abstract backgrounds
- **Fully Responsive**: Mobile-first design that works beautifully on all devices

### SEO Optimization
- **Complete Metadata**: Title, description, keywords optimized for search engines
- **OpenGraph Tags**: Full social media sharing support (Facebook, LinkedIn)
- **Twitter Cards**: Large image cards for Twitter/X sharing
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Image Alt Text**: All images have descriptive alt attributes
- **Structured Data Ready**: Easy to add JSON-LD schema markup

### Technical Excellence
- **Next.js 14 App Router**: Latest Next.js features and routing
- **TypeScript**: Full type safety throughout the codebase
- **Image Optimization**: Next.js Image component with blur placeholders
- **Performance**: Optimized animations and lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Sora, DM Sans)

## 🏗️ Project Structure

```
heywartommylola-landing-page/
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Main landing page with SEO metadata
│   └── globals.css          # Global styles and animations
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── About.tsx        # Brand story section
│   │   ├── Products.tsx     # Image-driven product grid
│   │   ├── BulkProduction.tsx  # Bulk & souvenir services
│   │   ├── LocationsDelivery.tsx  # Locations and delivery
│   │   ├── ContactOrder.tsx # Contact and social links
│   │   └── Footer.tsx       # Footer with links
│   └── ui/
│       └── button.tsx       # Reusable button component
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Product and section images
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Sections Overview

### 1. Hero Section
- Eye-catching headline with animated entrance
- WhatsApp CTA and product view button
- Animated product showcase image
- Floating statistics badge
- Abstract gradient background with animated orbs

### 2. About Section
- Split layout with manufacturing image
- Brand story and value propositions
- Icon-based feature grid
- Decorative background patterns

### 3. Products Section
- 6 product cards with individual images:
  - Liquid Soap (Best Seller)
  - Air Freshener (Popular)
  - Hypo
  - Izal (Popular)
  - Anti-dandruff Shampoo (Best Seller)
  - Hair Cream
- Hover animations and badges
- Custom quote CTA

### 4. Bulk & Souvenir Production
- Green gradient background with pattern overlay
- Service highlights with icons
- Bulk packaging image
- Event branding features

### 5. Locations & Delivery
- Four primary locations (Calabar, Igboora, Abeokuta, Ibadan)
- Nigeria map visual
- Nationwide delivery highlight
- Logistics imagery

### 6. Contact & Order
- WhatsApp and phone contact cards
- Social media links (Instagram, TikTok, Facebook)
- Customer support image
- Bottom CTA banner

### 7. Footer
- Brand information
- Quick links
- Social media icons
- Copyright notice

## 🖼️ Image Requirements

Create and place these images in `/public/images/`:

1. **hero-products.jpg** (600×700px) - Hero product showcase
2. **manufacturing.jpg** (600×700px) - Manufacturing facility
3. **liquid-soap.jpg** (400×500px) - Liquid soap product
4. **air-freshener.jpg** (400×500px) - Air freshener product
5. **hypo.jpg** (400×500px) - Hypo cleaning product
6. **izal.jpg** (400×500px) - Izal disinfectant
7. **shampoo.jpg** (400×500px) - Anti-dandruff shampoo
8. **hair-cream.jpg** (400×500px) - Hair cream
9. **bulk-packaging.jpg** (600×700px) - Bulk packaging/souvenirs
10. **nigeria-delivery.jpg** (600×700px) - Delivery/logistics
11. **customer-support.jpg** (600×700px) - Customer service
12. **og-image.jpg** (1200×630px) - Social sharing image

### Image Optimization Tips
- Use WebP or AVIF format for better compression
- Optimize with tools like TinyPNG or Squoosh
- Ensure images are high quality but web-optimized
- Use consistent aspect ratios per section

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the landing page.

## 🎨 Customization

### Colors
Update theme colors in `globals.css`:
```css
:root {
  --color-primary: 142 76% 36%;        /* Main green */
  --color-primary-light: 142 76% 46%;  /* Light green */
  --color-primary-dark: 142 76% 26%;   /* Dark green */
}
```

### Fonts
Change fonts in `layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';
```

### Contact Information
Update contact details in:
- `Hero.tsx` - WhatsApp button
- `ContactOrder.tsx` - All contact methods
- `Footer.tsx` - Social links

## 📱 Contact Integration

### WhatsApp
```
Primary: +234 810 482 6527
Format: https://wa.me/2348104826527
```

### Phone
```
Call: 0811 744 7563
Format: tel:08117447563
```

### Social Media
- Instagram: @heywartommylola
- TikTok: @heywartommy
- Facebook: Adesewa Mustapha

## 🔍 SEO Best Practices Implemented

1. **Meta Tags**: Comprehensive title, description, and keywords
2. **OpenGraph**: Complete OG tags for social sharing
3. **Twitter Cards**: Large image cards configured
4. **Semantic HTML**: Proper use of header, main, section, footer
5. **Heading Hierarchy**: Single H1, logical H2-H3 structure
6. **Image Alt Text**: Descriptive alt attributes on all images
7. **Mobile Responsive**: Mobile-first design approach
8. **Page Speed**: Optimized images and code splitting
9. **Locale**: Set to en_NG for Nigerian audience

## 📊 Performance Optimization

- Next.js Image optimization with blur placeholders
- Lazy loading for images below the fold
- CSS animations (no heavy JavaScript)
- Code splitting with Next.js App Router
- Minimal third-party dependencies

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS**: Use Amplify or S3 + CloudFront
- **Digital Ocean**: App Platform deployment

## 📝 Content Management

To update content:
1. Edit section components in `/components/sections/`
2. Update metadata in `page.tsx`
3. Replace images in `/public/images/`
4. Modify contact info as needed

## 🐛 Troubleshooting

**Images not loading?**
- Ensure images are in `/public/images/` directory
- Check file names match component imports
- Verify image formats are supported (jpg, png, webp)

**Animations not working?**
- Check Framer Motion is installed
- Verify no console errors
- Ensure JavaScript is enabled

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run lint`
- Verify Node.js version (18+ recommended)

## 📄 License

This project is created for Heywartommylola Liquid Products.

## 🤝 Support

For questions or support:
- WhatsApp: +234 810 482 6527
- Call: 0811 744 7563

---

**Built with ❤️ for Heywartommylola Liquid Products**
