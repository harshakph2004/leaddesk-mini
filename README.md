# LeadDesk Mini

A small lead-capture product with a public enquiry form and a secure admin workspace for reviewing, searching, and progressing incoming leads.

Live website: https://leaddesk-mini-eta.vercel.app/
Admin login: https://leaddesk-mini-eta.vercel.app/login
Admin dashboard: https://leaddesk-mini-eta.vercel.app/admin

## Stack

- Next.js (App Router) for the frontend and server actions
- PostgreSQL hosted on Neon
- Prisma ORM for schema, migrations, and type-safe database access
- Auth.js credentials provider with bcrypt password hashing and JWT-based sessions
- Vercel deployment

## Data model

`Lead` stores `name`, `email`, `budget`, `message`, `status`, and timestamps. `status` is an enum: `NEW`, `CONTACTED`, or `CLOSED`. Indexes on status, email, and creation time support the admin list now and future filtering.

`User` stores a unique email and a bcrypt password hash. There is no plaintext password in the database.

## Authentication approach

Only authenticated users can access `/admin`. Auth.js validates credentials against the `User` record, compares passwords with bcrypt, and issues a signed JWT session stored in a secure HTTP-only cookie. Middleware protects all `/admin` routes, while the server action that updates a lead checks the session again before changing the database.

## Local setup

1. Copy `.env.example` to `.env` and fill in the values.
2. Install packages with `npm install`.
3. Run `npm run db:push` to create the PostgreSQL tables.
4. Run `npm run db:seed` to create the admin user from `ADMIN_EMAIL` and `ADMIN_PASSWORD`.
5. Start with `npm run dev`.

## Deployment

Set `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in Vercel. Deploy, then use a one-time deployment command or local connection to run `npm run db:push` and `npm run db:seed` against the production database.

## Evaluation notes

The public form performs native client-side validation and repeats validation server-side with Zod. The footer includes the requested Digital Heroes Training Task credit link.

## AI use

I used AI as a development partner to speed up initial structure, validation patterns, and to pressure-test the authentication/data-flow choices. I then simplified the suggested scope into a focused lead inbox, chose PostgreSQL with Prisma to demonstrate backend fundamentals, and reviewed every interaction against the task rubric before finalising it.
