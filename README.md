# Todo List React App

A React todo app built with Vite and Supabase. It lets you add tasks, mark them complete, and delete them with real-time sync to a Supabase backend database.

## Preview

<p align="center">
  <img src="docs/thumbnailtodolist.png" width="100%" alt="Project Preview">
</p>

## Features

- Add new todos from a simple form
- Mark todos as completed with a custom checkbox UI
- Delete tasks you no longer need
- Real-time sync with Supabase backend database
- Persistent data across browser sessions and devices
- Lightweight React + Vite setup for fast development

## Tech Stack

- React 19
- Vite 8
- ESLint
- Supabase for backend and database

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Supabase account and project

### Environment Setup

Create a `.env.local` file in the project root with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_public_key
```

You can find these values in your Supabase project settings under "API".

### Database Setup

Create a `Todo` table in your Supabase database with the following schema:

```sql
create table Todo (
  id bigint primary key generated always as identity,
  title text not null,
  completed boolean default false,
  created_at timestamp default now()
);
```

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  NewTodoForm.jsx
  TodoItem.jsx
  TodoList.jsx
  main.jsx
  styles.css
```

## Behavior

The app syncs all todos with a Supabase database. Each todo includes:

- `id` - Auto-generated unique identifier
- `title` - The todo text
- `completed` - Boolean flag for completion status
- `created_at` - Timestamp of creation

All changes (add, update, delete) are immediately persisted to the Supabase backend.

## License

This project includes the repository's existing [LICENSE](./LICENSE).
