# Print Queen 3D - Vercel Deployment Guide

## ✅ What's Already Configured

Your Print Queen 3D storefront is now ready to deploy to Vercel with:
- ✅ Medusa Cloud backend connected (`https://printqueen3d.medusajs.app`)
- ✅ Publishable API key configured
- ✅ Environment variables set up
- ✅ Vercel configuration file created
- ✅ All dependencies installed

## 🚀 Deploy to Vercel (3 Simple Steps)

### Step 1: Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
cd printqueen3d-storefront
git init
git add .
git commit -m "Initial commit - Print Queen 3D storefront"
git branch -M main

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/printqueen3d-storefront.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository: `printqueen3d-storefront`
4. Vercel will auto-detect Next.js settings
5. **Environment Variables** - Add these in Vercel:

```
NEXT_PUBLIC_MEDUSA_BACKEND_URL
Value: https://printqueen3d.medusajs.app

NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
Value: pk_eabc62d2ba727f7489960bf91707410194df3b408c70ddd1a484132f1a8d90b0

NEXT_PUBLIC_DEFAULT_REGION
Value: us

REVALIDATE_SECRET
Value: printqueen3d_secret_key
```

6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete

### Step 3: Update Base URL

After first deployment:
1. Copy your Vercel deployment URL (e.g., `https://printqueen3d-storefront.vercel.app`)
2. Go to Vercel dashboard → Settings → Environment Variables
3. Add/Update:
   ```
   NEXT_PUBLIC_BASE_URL
   Value: https://printqueen3d-storefront.vercel.app (use your actual URL)
   ```
4. Redeploy from Deployments tab

## 🎨 Brand Customization (Print Queen 3D)

Your requirements for Print Queen 3D branding:

### Brand Colors
- **Cyan**: #00B7EB (primary)
- **Navy Blue**: #001F3F (secondary)
- **Chrome metallic accents**
- **Neon highlights** (accent)

### Required Pages
1. ✅ **Homepage** - Hero section with main CTA
2. ✅ **Shop/E-Commerce** - NFC stands, QR displays, keychains
3. ✅ **Request Quote** - Custom order form
4. ✅ **Portfolio** - Project gallery
5. ✅ **About** - Company story
6. ✅ **Account** - Customer login/orders
7. ✅ **Order Tracking** - Order lookup

### Contact Information
- **Email**: printqueen3d@gmail.com
- **Location**: Los Angeles, CA
- **Social**: Instagram, TikTok

## 📋 Next Steps After Deployment

### 1. Access Medusa Admin Panel
```
URL: https://printqueen3d.medusajs.app/app
```
- Create admin account
- Set up regions (US)
- Configure shipping methods
- Set up payment providers (Stripe recommended)

### 2. Add Products in Medusa Admin

Create product categories:
- **NFC Payment Stands**
- **QR Code Business Displays**
- **NFC Keychains**
- **Custom Business Accessories**

For each product:
- Add images
- Set pricing
- Add variants (colors, sizes)
- Set inventory
- Publish product

### 3. Configure CORS in Medusa Cloud

Add your Vercel URL to allowed origins:
1. Go to Medusa Cloud dashboard
2. Settings → CORS
3. Add: `https://your-vercel-url.vercel.app`

### 4. Test Your Store

Visit your Vercel URL and test:
- [ ] Homepage loads correctly
- [ ] Products display from Medusa backend
- [ ] Can add items to cart
- [ ] Checkout flow works
- [ ] Payment processing (if Stripe configured)

## 🔧 Local Development

To run locally:

```bash
cd printqueen3d-storefront
npm run dev
```

Visit: http://localhost:8000

## 🎨 UI/UX Customization

After deployment is successful, we can customize:

### Brand Updates
- Replace default logo with Print Queen 3D logo
- Update color scheme to cyan/navy/chrome
- Add modern, tech-forward fonts (Montserrat, Orbitron)
- Add geometric shapes and futuristic elements

### Homepage Hero
```
Headline: "Professional NFC + 3D Printing Services for Modern Businesses"
Subtext: "Premium precision. Fast turnaround. Local Los Angeles expertise."
CTAs: "Request a Quote" + "Shop Custom Products"
```

### Features Section
- Fast Turnaround
- Precision Printing
- Expert Design Support
- Business Branding

### Additional Pages
- Portfolio/Gallery page
- Custom quote request form
- Enhanced product pages with customization options

## 📊 SEO Optimization

Target keywords:
- "3D Printing Services Los Angeles"
- "NFC Payment Stands"
- "Custom QR Code Displays"
- "NFC Keychains for Business"

## 🔐 Security Notes

- Never commit `.env.local` to git (already in .gitignore)
- Keep API keys secure
- Only share backend URL, not admin credentials

## 🐛 Troubleshooting

### Products not showing?
- Verify products are published in Medusa admin
- Check products are assigned to "US" region
- Verify backend URL is correct

### CORS errors?
- Add Vercel URL to Medusa Cloud CORS settings
- Ensure backend URL includes https://

### Build fails?
- Check environment variables are set correctly
- Verify all required env vars are present

## 📞 Support

For Vercel deployment issues:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

For Medusa issues:
- Medusa Docs: https://docs.medusajs.com
- Medusa Discord: https://discord.gg/medusajs

## 🎯 Current Status

- ✅ Project created and configured
- ✅ Environment variables set
- ✅ Dependencies installed
- ⏳ Awaiting GitHub push
- ⏳ Awaiting Vercel deployment
- ⏳ Awaiting brand customization

Once deployed, let me know and we can proceed with customizing the UI/UX to match Print Queen 3D's brand identity!
