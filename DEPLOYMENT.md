# Deployment Guide - Heywartommylola Landing Page

## Quick Start Deployment

### Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., heywartommylola.com)
   - Update DNS records as instructed
   - SSL certificate is automatic

**Benefits:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Automatic image optimization
- Zero configuration needed

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Next.js**
   - Install Netlify plugin: `npm install -D @netlify/plugin-nextjs`
   - Create `netlify.toml`:
     ```toml
     [build]
       command = "npm run build"
       publish = ".next"
     
     [[plugins]]
       package = "@netlify/plugin-nextjs"
     ```

### Option 3: Self-Hosted (VPS)

For hosting on your own server (DigitalOcean, AWS, etc.):

1. **Install Node.js** on your server
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Upload your code**
   ```bash
   # On your server
   git clone YOUR_REPO_URL
   cd heywartommylola-landing-page
   ```

3. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

4. **Start the server**
   ```bash
   # For production
   npm start

   # Or use PM2 for process management
   npm install -g pm2
   pm2 start npm --name "heywartommylola" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx** (recommended)
   ```nginx
   server {
       listen 80;
       server_name heywartommylola.com www.heywartommylola.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d heywartommylola.com -d www.heywartommylola.com
   ```

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are added to `/public/images/`
- [ ] Contact information is correct
- [ ] Social media links are updated
- [ ] WhatsApp number is correct (+2348104826527)
- [ ] Phone number is correct (08117447563)
- [ ] OG image exists at `/public/og-image.jpg`
- [ ] Domain name is decided
- [ ] Google Analytics tracking ID (optional)
- [ ] Test build locally: `npm run build && npm start`

## Environment Variables

If needed, create `.env.local`:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Any API keys
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Post-Deployment Tasks

1. **Test on Multiple Devices**
   - Mobile (iOS and Android)
   - Tablet
   - Desktop browsers (Chrome, Safari, Firefox, Edge)

2. **Test Social Sharing**
   - Share on Facebook
   - Share on Twitter/X
   - Share on WhatsApp
   - Verify OG image appears correctly

3. **SEO Tools**
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools
   - Test with [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test mobile-friendliness

4. **Analytics Setup**
   - Add Google Analytics
   - Add Facebook Pixel (optional)
   - Setup conversion tracking

## Updating Content

After initial deployment, to update:

```bash
# Make changes locally
git add .
git commit -m "Update products/content"
git push

# Vercel/Netlify will auto-deploy
# For self-hosted:
ssh your-server
cd heywartommylola-landing-page
git pull
npm run build
pm2 restart heywartommylola
```

## Performance Optimization

Already implemented:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ Lazy loading
- ✅ Responsive images

Additional optimizations:
1. Enable Vercel Analytics
2. Add CDN for images (Cloudinary/ImageKit)
3. Enable caching headers
4. Monitor with Google Lighthouse

## Troubleshooting

**Build fails on Vercel/Netlify:**
- Check Node.js version (use 18+)
- Verify all dependencies in package.json
- Check for TypeScript errors locally

**Images not showing:**
- Ensure images are in `/public/images/`
- Check file names match component imports
- Verify image formats (jpg, png, webp)

**WhatsApp link not working:**
- Verify phone number format: +2348104826527
- Test link: https://wa.me/2348104826527

**Slow loading:**
- Optimize images further
- Check Lighthouse scores
- Enable Vercel Analytics to identify issues

## Custom Domain Setup

### Vercel
1. Go to Settings → Domains
2. Add your domain
3. Update DNS at your registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Netlify
1. Go to Settings → Domain management
2. Add custom domain
3. Update DNS:
   - Type: A, Name: @, Value: [Netlify IP]
   - Type: CNAME, Name: www, Value: [Your Netlify subdomain]

## Monitoring & Maintenance

**Weekly:**
- Check analytics
- Monitor uptime
- Review performance metrics

**Monthly:**
- Update dependencies: `npm update`
- Review and respond to user feedback
- Check for broken links

**Quarterly:**
- Major dependency updates
- Content refresh
- SEO audit

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Netlify Docs](https://docs.netlify.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Contact for Deployment Help

- WhatsApp: +234 810 482 6527
- Call: 0811 744 7563

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀
