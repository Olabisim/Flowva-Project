# Email Template Setup Guide

This guide will help you set up the custom email confirmation template in your Supabase project.

## Step 1: Upload the Header Image

1. The header image is located at `app/unnamed.png` in your project
2. You need to host this image online (or use a CDN) so it can be accessed in emails
3. Options:
   - Upload to a cloud storage service (AWS S3, Cloudinary, etc.)
   - Use a public image hosting service
   - Host it in your Next.js app's `public` folder and reference it with your domain

## Step 2: Configure Email Template in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Email Templates**
3. Find the **Confirm signup** template
4. Click **Edit** or **Customize**
5. Set the **Subject** to: `Confirm Your Signup to Flowva`

## Step 3: Use the Custom Template

1. Copy the contents of `supabase/email-templates/confirm-email.html`
2. In the Supabase email template editor:
   - Replace `{{CONFIRMATION_URL}}` with: `{{ .ConfirmationURL }}`
   - Replace `{{HEADER_IMAGE_URL}}` with the public URL of your uploaded image
   - Or use: `https://yourdomain.com/unnamed.png` if hosted in your Next.js public folder

## Step 4: Supabase Template Variables

Supabase uses Go template syntax. Here are the available variables:

- `{{ .ConfirmationURL }}` - The email confirmation link
- `{{ .Email }}` - User's email address
- `{{ .Token }}` - Confirmation token (if needed)
- `{{ .TokenHash }}` - Token hash (if needed)
- `{{ .SiteURL }}` - Your site URL

## Step 5: Update the Template HTML

Replace the template HTML in Supabase with this (update the image URL):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Your Signup to Flowva</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    
                    <!-- Header Banner -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 30px 40px; position: relative;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="color: #ffffff; font-size: 28px; font-weight: bold; line-height: 1.2;">
                                        Your Digital Life Simplified
                                    </td>
                                    <td align="center" width="80" style="padding: 0 20px;">
                                        <div style="width: 60px; height: 60px; background-color: #ffffff; border-radius: 50%; display: inline-block; border: 3px solid rgba(255,255,255,0.3); position: relative;">
                                            <!-- Glasses Icon SVG -->
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                                <path d="M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" stroke="#9333ea" stroke-width="2" fill="none"/>
                                                <path d="M2 12H4M20 12H22" stroke="#9333ea" stroke-width="2" stroke-linecap="round"/>
                                                <circle cx="6" cy="8" r="1.5" fill="#9333ea"/>
                                                <circle cx="18" cy="8" r="1.5" fill="#9333ea"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td align="right" width="80">
                                        <img src="YOUR_IMAGE_URL_HERE" alt="Flowva" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.3);" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Email Body -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                                Hi,
                            </p>

                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                                Welcome to Flowva! We're excited to have you on board. You've just joined a growing community of freelancers and digital tool lovers making smarter moves with their time, tools and resources.
                            </p>

                            <p style="margin: 0 0 30px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                                All that's left?
                            </p>

                            <!-- CTA Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 0 0 30px 0;">
                                        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background-color: #9333ea; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; text-align: center; box-shadow: 0 4px 6px rgba(147, 51, 234, 0.3);">
                                            <span style="display: inline-block; vertical-align: middle;">
                                                Click here to verify your email address
                                            </span>
                                            <span style="display: inline-block; vertical-align: middle; margin-left: 8px;">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="vertical-align: middle;">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <circle cx="20" cy="4" r="2" fill="#fbbf24"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 0 0 30px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                                Once you're in, you'll be ready to explore all the features that help make life a little less hectic and a lot more organized.
                            </p>

                            <p style="margin: 0; font-size: 16px; color: #374151; line-height: 1.6;">
                                let's get you started.<br>
                                <strong style="color: #9333ea;">The Flowva Team</strong>
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                            <p style="margin: 0; font-size: 12px; color: #6b7280;">
                                © 2024 Flowva. All rights reserved.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

## Step 6: Configure Redirect URL

Make sure your Supabase project has the correct redirect URL configured:

1. Go to **Authentication** → **URL Configuration**
2. Add your site URL to **Redirect URLs**: `https://yourdomain.com/auth/confirm`
3. For local development: `http://localhost:3000/auth/confirm`

## Step 7: Test the Email

1. Sign up with a test email
2. Check your email inbox
3. Click the "Click here to verify your email address" button
4. You should be redirected to `/auth/confirm` which will verify your email and redirect to the dashboard

## Alternative: Host Image in Next.js Public Folder

If you want to use the image from your Next.js app:

1. Move `app/unnamed.png` to `public/unnamed.png`
2. In the email template, use: `https://yourdomain.com/unnamed.png`
3. Make sure your domain is accessible and the image is publicly accessible

## Notes

- **Email Subject**: Set the subject line to `Confirm Your Signup to Flowva` in the Supabase email template settings
- The email template uses inline CSS for maximum email client compatibility
- The verification link uses `{{ .ConfirmationURL }}` which Supabase automatically generates
- The link will redirect to `/auth/confirm` route which handles the verification
- After verification, users are redirected to `/dashboard` as configured in the auth flow
- The header image (`app/unnamed.png`) should be hosted publicly and referenced with a full URL in the template

