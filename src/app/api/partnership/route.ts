import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, socialMedia, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format email content
    const emailContent = `
New Partnership Inquiry from Print Queen 3D Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Social Media: ${socialMedia || "Not provided"}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // For development/simple setup: Using mailto (opens in user's email client)
    // In production, you would use an email service like Resend, SendGrid, etc.
    
    // Option 1: Using Resend (recommended for production)
    // Uncomment and configure when ready:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'partnerships@printqueen3d.com',
      to: 'Printqueen3d@gmail.com',
      subject: `New Partnership Inquiry from ${name}`,
      text: emailContent,
    });
    */

    // Option 2: Using fetch to send via a webhook or email service
    // For now, we'll log it and return success
    console.log("Partnership inquiry received:");
    console.log(emailContent)

    // In production, you would send the actual email here
    // For demo purposes, we'll send to a webhook or use Vercel's email feature
    
    // If you have a webhook service (like Zapier, Make.com, etc.), use this:
    if (process.env.PARTNERSHIP_WEBHOOK_URL) {
      await fetch(process.env.PARTNERSHIP_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "Printqueen3d@gmail.com",
          subject: `New Partnership Inquiry from ${name}`,
          content: emailContent,
          formData: { name, email, phone, socialMedia, message }
        }),
      })
    }

    return NextResponse.json(
      { 
        message: "Partnership inquiry received successfully",
        data: { name, email }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing partnership inquiry:", error)
    return NextResponse.json(
      { error: "Failed to process partnership inquiry" },
      { status: 500 }
    )
  }
}
