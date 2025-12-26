# Flowva

A modern web application for managing productivity tools with a rewards-based system. Built with Next.js, Supabase, and Tailwind CSS.

## Features

- 🎨 **Beautiful Landing Page** - Pixel-perfect design with smooth animations
- 🔐 **Authentication** - Email/password authentication with Supabase
- 🎁 **Rewards System** - Earn points through daily check-ins and referrals
- 📊 **Dashboard** - Track your progress, streaks, and redeem rewards
- 🎯 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Real-time Updates** - Powered by Supabase for instant data synchronization

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- A [Supabase](https://supabase.com/) account (free tier works)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd flowva
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Supabase

#### 3.1 Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up or log in
2. Click "New Project"
3. Fill in your project details:
   - **Name**: Flowva (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the region closest to you
4. Click "Create new project" and wait for setup to complete

#### 3.2 Get Your Supabase Keys

1. In your Supabase project dashboard, go to **Settings** (⚙️) → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)

> 📖 **Detailed instructions**: See [GET_SUPABASE_KEYS.md](./GET_SUPABASE_KEYS.md) for step-by-step guidance

#### 3.3 Set Up Environment Variables

1. Create a `.env.local` file in the project root:

```bash
# Windows (PowerShell)
New-Item -Path .env.local -ItemType File

# Mac/Linux
touch .env.local
```

2. Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace the placeholder values with your actual keys from Supabase.

> ⚠️ **Important**: Never commit `.env.local` to git. It should already be in `.gitignore`.

#### 3.4 Run Database Migrations

1. In your Supabase dashboard, go to **SQL Editor**
2. Open the file `supabase/migrations/001_create_users_table.sql`
3. Copy the entire SQL content and paste it into the SQL Editor
4. Click "Run" to execute the migration

This will create:
- The `users` table with fields: `id`, `name`, `email`, `points`, `user_type`, `last_check_in`, `streak_days`
- Row Level Security (RLS) policies
- Database triggers for automatic profile creation and timestamp updates

#### 3.5 Set Up Email Templates (Optional but Recommended)

1. In Supabase dashboard, go to **Authentication** → **Email Templates**
2. Select "Confirm signup" template
3. Copy the content from `supabase/email-templates/confirm-email.html`
4. Paste it into the template editor
5. Set the subject to: **"Confirm Your Signup to Flowva"**
6. Save the template

> 📖 **Detailed instructions**: See [supabase/email-templates/EMAIL_SETUP.md](./supabase/email-templates/EMAIL_SETUP.md)

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Verify Setup

Visit [http://localhost:3000/check-env](http://localhost:3000/check-env) to verify that your environment variables are loaded correctly.

## Project Structure

```
flowva/
├── app/                          # Next.js App Router pages
│   ├── dashboard/                # Dashboard pages
│   ├── login/                    # Authentication page
│   └── page.tsx                  # Landing page
├── components/
│   ├── dashboard/               # Dashboard components
│   ├── landing-page-components/ # Landing page sections
│   ├── ui/                      # shadcn/ui components
│   └── auth-page.tsx            # Unified auth component
├── lib/
│   ├── hooks/                   # Custom React hooks
│   │   └── use-user.ts          # User profile hook
│   └── supabase/                # Supabase client utilities
├── public/                       # Static assets
├── supabase/
│   ├── migrations/              # Database migrations
│   └── email-templates/         # Email templates
└── README.md
```

## Key Features Implementation

### Authentication

- **Unified Auth Page**: Single page (`/login`) handles both login and signup
- **Email Confirmation**: Custom email template for signup verification
- **Password Reset**: Forgot password functionality
- **Session Management**: Cookie-based sessions with `@supabase/ssr`

### Rewards System

- **Daily Check-in**: Users can claim 5 points once per day
- **Streak Tracking**: Tracks consecutive daily check-ins
- **Points Balance**: Real-time points display
- **Referral System**: Earn points by referring friends

### Dashboard

- **Fixed Header**: Title, subtitle, and tabs remain fixed while content scrolls
- **Tab Navigation**: Switch between "Earn Points" and "Redeem Rewards"
- **Responsive Layout**: Sidebar navigation with main content area

## Assumptions and Trade-offs

### Assumptions

1. **User Model**: 
   - Users are identified by email (unique constraint)
   - All users start with 0 points and "user" type
   - User profiles are automatically created on signup via database trigger

2. **Daily Check-in**:
   - Check-in resets at midnight UTC
   - Users can only check in once per day
   - Streak is calculated based on consecutive days (resets if a day is missed)

3. **Authentication Flow**:
   - Email confirmation is required for new signups
   - Users are redirected to `/dashboard` after successful authentication
   - Session is managed via HTTP-only cookies for security

4. **UI/UX**:
   - Landing page animations are optimized for modern browsers
   - Mobile-first responsive design approach
   - Carousels support both drag and auto-play (where applicable)

### Trade-offs

1. **Database Triggers vs. Application Logic**:
   - **Choice**: User profile creation happens via database trigger
   - **Reason**: Ensures data consistency even if application code fails
   - **Trade-off**: Less visibility into errors, but more reliable

2. **Cookie-based Sessions**:
   - **Choice**: Using `@supabase/ssr` for cookie-based auth
   - **Reason**: Better security and works across all Next.js rendering modes
   - **Trade-off**: Slightly more complex setup than token-based auth

3. **Unified Auth Page**:
   - **Choice**: Single page for both login and signup
   - **Reason**: Simpler navigation and code maintenance
   - **Trade-off**: URL query parameters needed to distinguish modes

4. **Client-side State Management**:
   - **Choice**: React hooks (`useState`, `useEffect`) for local state
   - **Reason**: Simplicity for current feature set
   - **Trade-off**: May need state management library (Redux, Zustand) as app grows

5. **Static Image Assets**:
   - **Choice**: Images stored in `public/` folder
   - **Reason**: Simple and works well for small number of assets
   - **Trade-off**: No automatic optimization; consider Next.js Image component for production

6. **Email Template Customization**:
   - **Choice**: Custom HTML email template in Supabase
   - **Reason**: Better branding and user experience
   - **Trade-off**: Requires manual setup in Supabase dashboard


### Authentication Issues

- Verify email confirmation is set up correctly
- Check Supabase project settings for email configuration
- Ensure redirect URLs are whitelisted in Supabase dashboard

### Build Errors

- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check for TypeScript errors: `npm run lint`
- Verify all dependencies are installed: `npm install`


## Support

For issues and questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Review Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

---

Built with ❤️ using Next.js and Supabase
