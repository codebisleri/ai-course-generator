This is a [Next.js](https://nextjs.org) project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Geist font family.

## Local Development Setup

For detailed local development setup instructions, see [LOCAL_SETUP.md](LOCAL_SETUP.md).

### Quick Setup

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace placeholder values with your actual keys:
   - Get Clerk keys from your [Clerk Dashboard](https://dashboard.clerk.dev/)
   - Get Perplexity API key from [Perplexity AI](https://www.perplexity.ai/)
   - Get YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
   - Set up a PostgreSQL database
   - Add your Clerk user ID to ADMIN_USERS for admin access

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run database migrations:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_PERPLEXITY_API_KEY=your_perplexity_api_key
YOUTUBE_API_KEY=your_youtube_api_key
DATABASE_URL=your_database_url
ADMIN_USERS=user_id_1,user_id_2
```

### Getting YouTube API Key

To enable YouTube video integration for course chapters:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Copy the API key and add it to your `.env.local` file as `YOUTUBE_API_KEY`

## Admin Dashboard

This application includes an admin dashboard that allows special users to:
- Create unlimited courses
- Delete any course from the system
- Manage all public courses in the Explore section

To access the admin dashboard:
1. Add your Clerk user ID to the ADMIN_USERS environment variable
2. Log in to the application
3. Navigate to the Admin Dashboard from the sidebar menu

## Deployment

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. The application will be available at http://localhost:3000

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.