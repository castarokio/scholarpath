# ScholarPath

Your Gateway to Global Education - A modern platform for study abroad guidance and courses.

## Features

- **Study Abroad Programs**: Paid consulting packages for students
- **Courses**: Free and premium courses (IELTS, scholarships, applications)
- **Enrollment System**: DM-based payment with contact form
- **Admin Dashboard**: Manage enrollments, courses, and view stats
- **Modern UI**: Heavy animations with Framer Motion
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (for admin)
- **Hosting**: Vercel (Free tier)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy the `URL` and `anon public` key
5. Create `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### 3. Run Database Migrations

1. In Supabase, go to the SQL Editor
2. Copy the contents of `supabase/schema.sql`
3. Run the SQL to create tables and seed data

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
npm run build
```

Or deploy directly via Vercel Dashboard:
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Admin Access

The admin dashboard is at `/admin` (currently shows mock data).

To enable real data:
1. Set up Supabase Auth
2. Create an admin user
3. Update the admin page to use real Supabase queries

## Project Structure

```
src/
  app/           # Next.js app router pages
  components/    # React components (UI + custom)
  lib/           # Utilities (Supabase client)
public/          # Static assets
supabase/        # Database schema
```

## Customization

- Update colors in `src/app/globals.css`
- Modify programs/courses in `supabase/schema.sql`
- Add your own branding in `src/components/navigation.tsx`

## Payment Flow

1. User fills enrollment form (`/enroll`)
2. You receive their contact details via:
   - Supabase database (real-time)
   - Or implement email notifications
3. Contact them via WhatsApp/email
4. Confirm payment
5. Mark as "paid" in admin dashboard
6. Grant access to course/program

## License

MIT
