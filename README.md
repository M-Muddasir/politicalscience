# Department of Political Science Website

A comprehensive departmental website built with Next.js for the Department of Political Science. This project includes both the public-facing frontend and a complete admin panel for content management.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS (configured with GCU color palette)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js

## Features

- **Public Website**
  - Home page with hero carousel, VP and Chairperson messages
  - Faculty profiles and details
  - Academic programs information
  - News and events listings
  - Research section (QJPSS Journal, newsletters)
  - About pages (Mission & Vision, History, China Study Centre)
  - Admissions page with inquiry form
  - Contact page
  - Scholarships information
  - Student societies and alumni pages

- **Admin Panel**
  - Authentication with NextAuth.js
  - Dashboard overview
  - Complete CRUD operations for all database tables:
    - Faculty management
    - Programs management
    - News management
    - Events management
    - Chairperson & Vice Chancellor messages
    - Admissions inquiries management

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL (local or remote)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd politicalscience
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Generate Prisma client and run migrations

```bash
npx prisma generate
npx prisma migrate dev
```

5. Seed the database with sample data

```bash
npm run db:seed
```

6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Admin Access

Access the admin panel at: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

Default credentials (after seeding):
- Email: admin@gcu.edu.pk
- Password: password123

## Database Schema

The database schema includes the following main tables:

- Department
- Faculty
- Programs
- Courses
- ChairpersonMessage
- ViceChancellorMessage
- News
- Events
- ContactSubmission (for admission inquiries)
- User (admin users)

See the complete schema in `prisma/schema.prisma`.

## Deployment

This application can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
```

For database migrations in production:

```bash
npx prisma migrate deploy
```

## License

This project is licensed under the MIT License.
