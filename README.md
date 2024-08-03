# DietBuilder AI

Generate diets using Artificial Intelligence!

## Features

-   Generate personalized diets using artificial intelligence.
-   Save generated diets for future reference.
-   Login using Google Sign-In.

## Technologies Used

-   Next.js with TypeScript
-   Supabase
-   Google Generative AI
-   Shadcn UI with Tailwind CSS

## Local Setup

Make sure you have a supabase project setup

Create a `.env.local` file and add the following details

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GOOGLE_AI_API_KEY=
```

Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
