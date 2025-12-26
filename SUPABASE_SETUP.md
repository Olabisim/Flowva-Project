# Supabase Setup Guide

This guide will help you set up the Supabase database for the Flowva application.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A Supabase project created

## Database Setup

### Step 1: Run the Migration

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `supabase/migrations/001_create_users_table.sql`
4. Paste it into the SQL Editor
5. Click "Run" to execute the migration

Alternatively, if you have the Supabase CLI installed:

```bash
supabase db push
```

### Step 2: Verify the Table

1. Go to the Table Editor in your Supabase dashboard
2. You should see a `users` table with the following columns:
   - `id` (UUID, Primary Key, references auth.users)
   - `name` (Text)
   - `email` (Text, Unique)
   - `points` (Integer, Default: 0)
   - `user_type` (Text, Default: 'user')
   - `last_check_in` (Date)
   - `streak_days` (Integer, Default: 0)
   - `created_at` (Timestamp)
   - `updated_at` (Timestamp)

### Step 3: Verify Row Level Security (RLS)

The migration automatically:
- Enables RLS on the `users` table
- Creates policies for users to view and update their own profiles
- Sets up a trigger to automatically create user profiles on signup

### Step 4: Test the Setup

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/login` and create a new account
3. After signup, check the `users` table in Supabase to verify a profile was created
4. Log in and navigate to `/dashboard` to see your points and daily check-in

## User Model

The user model includes:
- **name**: User's display name
- **email**: User's email address (from auth.users)
- **points**: Current points balance (starts at 0)
- **user_type**: Type of user (default: 'user')
- **last_check_in**: Date of last daily check-in
- **streak_days**: Current consecutive check-in streak

## Features

### Daily Check-in
- Users can check in once per day
- Each check-in awards 5 points
- Streak tracking: consecutive days increase the streak counter
- If a day is missed, the streak resets to 1

### Points System
- Points start at 0 for new users
- Points can be earned through:
  - Daily check-ins (+5 points)
  - Referrals (+25 points per referral)
  - Tool signups (varies by tool)
  - Other activities (to be implemented)

## Troubleshooting

### Issue: User profile not created on signup

**Solution**: Check that the trigger `on_auth_user_created` exists and is enabled. You can verify this in the Database > Functions section of your Supabase dashboard.

### Issue: RLS policies blocking access

**Solution**: Verify that the RLS policies are correctly set up. The migration should have created:
- "Users can view own profile" (SELECT)
- "Users can update own profile" (UPDATE)

### Issue: Points not updating

**Solution**: 
1. Check browser console for errors
2. Verify the user is logged in
3. Check Supabase logs for any database errors
4. Ensure the `users` table has the correct structure

## Next Steps

After setting up the database:
1. Test user registration and login
2. Test daily check-in functionality
3. Implement additional point-earning features
4. Set up referral tracking (if needed)

