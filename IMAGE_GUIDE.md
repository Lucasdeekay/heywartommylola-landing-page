# Image Placeholder Guide

## Required Images for Heywartommylola Landing Page

Place all images in the `/public/images/` directory.

### Product Images (400×500px recommended)

1. **liquid-soap.jpg**
   - High-quality photo of liquid soap bottle
   - Show branding if available
   - Clean, professional product shot
   - White or minimal background

2. **air-freshener.jpg**
   - Air freshener spray bottle
   - Show the product clearly
   - Lifestyle setting optional

3. **hypo.jpg**
   - Hypo cleaning product bottle
   - Professional product photography
   - Clear label visible

4. **izal.jpg**
   - Izal disinfectant bottle
   - Clean product shot
   - Show brand identity

5. **shampoo.jpg**
   - Anti-dandruff shampoo bottle
   - Professional styling
   - Hair care context optional

6. **hair-cream.jpg**
   - Hair cream container
   - Beauty product styling
   - Lifestyle shot acceptable

### Section Images (600×700px recommended)

7. **hero-products.jpg**
   - Collection of your best products
   - Arranged aesthetically
   - High-quality hero image
   - Can include lifestyle elements

8. **manufacturing.jpg**
   - Manufacturing facility interior
   - Quality control process
   - Modern, clean environment
   - Shows professionalism

9. **bulk-packaging.jpg**
   - Multiple products packaged for bulk
   - Event souvenirs example
   - Branded packaging
   - Quantity showcase

10. **nigeria-delivery.jpg**
    - Delivery truck or logistics
    - Nigeria map overlay (optional)
    - Professional delivery service
    - Nationwide coverage theme

11. **customer-support.jpg**
    - Friendly customer service rep
    - Professional setting
    - Smiling, approachable
    - Communication theme

### Social Sharing Image

12. **og-image.jpg** (1200×630px - REQUIRED)
    - Professional brand image
    - Include logo and key products
    - Text: "Premium Liquid Products"
    - Optimized for social media sharing

## Image Optimization Checklist

- [ ] Convert to WebP or AVIF format
- [ ] Compress with TinyPNG or Squoosh
- [ ] Ensure minimum recommended dimensions
- [ ] Add descriptive file names
- [ ] Test on mobile and desktop
- [ ] Verify fast loading times

## Temporary Placeholder Option

If you don't have real images yet, you can use:
- Unsplash.com (free stock photos)
- Pexels.com (free stock photos)
- Create colored placeholder images
- Use product mockup templates

## Image Tips

1. **Consistency**: Use similar lighting and style
2. **Quality**: High resolution, sharp focus
3. **Background**: Clean, uncluttered backgrounds work best
4. **Branding**: Include your brand elements where appropriate
5. **Context**: Show products in use when relevant

## Quick Setup

```bash
# Create images directory
mkdir -p public/images

# Add your images to this directory
# File naming must match exactly:
# - hero-products.jpg
# - manufacturing.jpg
# - liquid-soap.jpg
# (etc.)
```

Once images are added, the Next.js Image component will automatically:
- Optimize for web
- Generate responsive sizes
- Add blur placeholders
- Lazy load below the fold
