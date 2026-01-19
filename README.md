# Buildfolio

A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.

## 🚀 Features

- **Product Showcase**: Submit and display your projects with detailed information
- **User Authentication**: Secure authentication using Clerk with organization support
- **Product Submission**: Submit products with name, tagline, description, website URL, and tags
- **Featured Products**: Highlight featured products on the landing page
- **Recently Launched**: Display recently launched products
- **Product Voting**: Vote count system for products
- **Product Status**: Approval workflow (pending, approved, rejected)
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS
- **Type Safety**: Full TypeScript support throughout the application
- **Database**: PostgreSQL database (Neon Serverless DB) with Drizzle ORM
- **Next.js 16**: Built with Next.js 16 featuring React Compiler and Cache Components

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with `Cache Components` and `React 19`
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Neon Serverless DB](https://neon.com/docs/guides/nextjs)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/docs/get-started/neon-new)
- **Validation**: Zod
- **Linting & Formatting**: Biome


## 🔧 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd buildfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_database_url
```

You can reference `env-sample.txt` for the required environment variables.

4. **Set up the database**

Generate and run database migrations:

```bash
npm run db:generate-migration
npm run db:push
```

5. **Seed the database (optional)**

Populate the database with sample data:

```bash
npm run db:seed
```


## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run ts` - Run TypeScript type checking in watch mode
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run db:generate-migration` - Generate database migration
- `npm run db:push` - Push database schema changes
- `npm run db:seed` - Seed database with sample data