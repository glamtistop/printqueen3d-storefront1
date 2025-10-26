# Print Queen 3D Storefront

A professional e-commerce storefront for Print Queen 3D, a Los Angeles-based custom 3D printing business specializing in NFC payment stands, QR code displays, and customized keychains.

## 🚀 Quick Start

Your storefront is **ready to deploy**! Follow these 3 steps:

### 1. Push to GitHub

```bash
cd printqueen3d-storefront
git init
git add .
git commit -m "Initial commit - Print Queen 3D storefront"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/printqueen3d-storefront.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Add environment variables (see below)
5. Click **"Deploy"**

### 3. Add Environment Variables in Vercel

```
NEXT_PUBLIC_MEDUSA_BACKEND_URL = https://printqueen3d.medusajs.app
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY = pk_eabc62d2ba727f7489960bf91707410194df3b408c70ddd1a484132f1a8d90b0
NEXT_PUBLIC_DEFAULT_REGION = us
REVALIDATE_SECRET = printqueen3d_secret_key
```

## 📚 Documentation

- **[VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)** - Complete deployment instructions
- **[Medusa Documentation](https://docs.medusajs.com)** - Backend documentation
- **[Next.js Documentation](https://nextjs.org/docs)** - Frontend framework docs

## 🎨 Print Queen 3D Branding

### Brand Identity
- **Business**: Custom 3D printing and NFC solutions
- **Location**: Los Angeles, CA
- **Contact**: printqueen3d@gmail.com

### Brand Colors
- **Cyan**: #00B7EB (primary)
- **Navy Blue**: #001F3F (secondary)  
- **Chrome metallic accents**
- **Neon highlights**

### Product Categories
1. NFC Payment Stands
2. QR Code Business Displays
3. NFC Keychains
4. Custom Business Accessories

## 🔧 Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000)

## 📦 What's Included

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Medusa JS SDK integration
- ✅ Pre-configured for Medusa Cloud
- ✅ Responsive design
- ✅ E-commerce features (cart, checkout, payments)

## 🛍️ Medusa Admin Panel

Access your backend admin panel:

**URL**: [https://printqueen3d.medusajs.app/app](https://printqueen3d.medusajs.app/app)

Use the admin panel to:
- Add/manage products
- Process orders
- Configure shipping
- Set up payment providers
- Manage customers

## 📋 Next Steps After Deployment

1. ✅ Deploy to Vercel (see guide above)
2. 🎨 Customize branding and colors
3. 📦 Add products in Medusa Admin
4. ⚙️ Configure CORS in Medusa Cloud
5. 💳 Set up payment provider (Stripe)
6. 🚚 Configure shipping methods
7. 🧪 Test the store

## 🎯 Features to Customize

After deployment, we can add:
- Custom homepage hero section
- Request a quote form
- Portfolio/gallery page
- Print Queen 3D logo and branding
- Custom product pages with personalization options
- Lead capture popups
- SEO optimization

## 🔐 Environment Variables

Required environment variables are already configured in `.env.local`:

- `NEXT_PUBLIC_MEDUSA_BACKEND_URL` - Your Medusa Cloud backend
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` - API key for storefront
- `NEXT_PUBLIC_DEFAULT_REGION` - Default region (US)
- `REVALIDATE_SECRET` - For ISR revalidation

## 🐛 Troubleshooting

### Products not showing?
- Verify products are published in Medusa admin
- Check products are assigned to "US" region

### CORS errors?
- Add Vercel URL to Medusa Cloud CORS settings

### Build errors?
- Verify all environment variables are set correctly

## 📞 Support

- **Medusa Docs**: [https://docs.medusajs.com](https://docs.medusajs.com)
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)

## 📄 License

MIT License - See LICENSE file for details

---

**Print Queen 3D** - Professional NFC + 3D Printing Services for Modern Businesses
