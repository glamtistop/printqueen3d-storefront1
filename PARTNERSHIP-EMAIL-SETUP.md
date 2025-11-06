# Partnership Form Email Setup

The partnership form is now integrated into your website. Form submissions need to be routed to your email (Printqueen3d@gmail.com).

## Current Setup

The form is functional and will:
- Validate all required fields
- Display success/error messages to users
- Log submissions to the server console

## Email Integration Options

### Option 1: Zapier/Make.com Webhook (Easiest - Recommended)

1. Create a free account on [Zapier](https://zapier.com) or [Make.com](https://make.com)
2. Create a new automation ("Zap" or "Scenario")
3. Set trigger as "Webhook - Catch Hook"
4. Copy the webhook URL provided
5. Set action as "Gmail - Send Email" 
   - To: Printqueen3d@gmail.com
   - Subject: New Partnership Inquiry from {{name}}
   - Body: Use the form data fields
6. Add the webhook URL to your Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `PARTNERSHIP_WEBHOOK_URL` = your webhook URL
   - Redeploy the site

### Option 2: Resend Email Service (Professional)

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Verify your domain or use their test domain
4. Install Resend:
   ```bash
   npm install resend
   ```
5. Uncomment the Resend code in `src/app/api/partnership/route.ts`
6. Add to Vercel environment variables:
   - `RESEND_API_KEY` = your Resend API key

### Option 3: SendGrid (Enterprise)

1. Sign up at [SendGrid](https://sendgrid.com)
2. Get your API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
4. Update the API route with SendGrid integration
5. Add to Vercel environment variables:
   - `SENDGRID_API_KEY` = your SendGrid API key

## Testing

1. Visit: https://printqueen3d-storefront1.vercel.app/us/partnership
2. Fill out the form
3. Submit
4. Check your email (Printqueen3d@gmail.com)

## Form Fields Collected

- Name (required)
- Email (required)
- Phone Number (required)
- Social Media Handle (optional)
- Partnership Message (required)

## Files Created

- `/src/app/[countryCode]/(main)/partnership/page.tsx` - Partnership form page
- `/src/app/api/partnership/route.ts` - API endpoint for form submission
- Footer updated with "Partner With Us" button linking to form

## Next Steps

1. Choose an email integration option above
2. Set up the service
3. Add environment variable to Vercel
4. Test the form
5. Start receiving partnership inquiries!
