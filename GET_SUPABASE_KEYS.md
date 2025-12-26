# How to Get Your Supabase Keys

Follow these steps to get your Supabase project URL and API keys:

## Step 1: Create a Supabase Project (if you haven't)

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: Give your project a name (e.g., "Flowva")
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the region closest to you
5. Click "Create new project"
6. Wait for the project to be set up (this takes a few minutes)

## Step 2: Get Your Project URL and API Keys

1. Once your project is ready, go to your project dashboard
2. Click on the **Settings** icon (⚙️) in the left sidebar
3. Click on **API** in the settings menu
4. You'll see two important values:

### Project URL
- Look for **Project URL** or **URL**
- It looks like: `https://xxxxxxxxxxxxx.supabase.co`
- Copy this value

### API Keys
- Look for **Project API keys** section
- You'll see two keys:
  - **anon** or **public** key (this is your `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)
  - **service_role** key (keep this secret, don't use it in client-side code!)

## Step 3: Set Up Your Environment Variables

1. In your project root directory, create a file named `.env.local`
   - If you're on Windows, you can create it in PowerShell:
     ```powershell
     New-Item -Path .env.local -ItemType File
     ```

2. Open `.env.local` and add your keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. Replace the placeholder values with your actual keys from Step 2

## Step 4: Restart Your Development Server

After adding the environment variables:

1. Stop your current development server (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   ```

## Quick Reference: Where to Find Keys

**Supabase Dashboard Path:**
```
Project Dashboard → Settings (⚙️) → API → Project URL & API Keys
```

**Direct Link Format:**
```
https://app.supabase.com/project/[your-project-id]/settings/api
```

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to git (it should already be in `.gitignore`)
- The `anon`/`public` key is safe to use in client-side code
- Never expose your `service_role` key in client-side code
- Keep your database password secure

## Troubleshooting

**Issue: "Invalid API key" error**
- Make sure you copied the entire key (they're very long)
- Check for any extra spaces or line breaks
- Verify you're using the `anon`/`public` key, not the `service_role` key

**Issue: "Project URL not found"**
- Make sure you're using the full URL including `https://`
- Check that your project is fully set up and not still initializing

**Issue: Environment variables not loading**
- Make sure the file is named exactly `.env.local` (not `.env` or `.env.example`)
- Restart your development server after creating/updating `.env.local`
- In Next.js, environment variables starting with `NEXT_PUBLIC_` are available in the browser


