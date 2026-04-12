# WIREFRAME
> A minimalist, dark-themed blogging platform. Just the words, Nothing else.

An open-source, distraction-free blogging platform built for those who want to escape the algorithm. Wireframe strips away the clutter, relying on a sleek cyan-black terminal aesthetic to put the focus exactly where it belongs: the writing.

## Current Status

This repository is currently in active development. The core UI layout and routing architecture have been established, and the primary backend integration is complete. 

**Completed:**
- [x] React Router architecture setup
- [x] Production-ready responsive Header & Footer
- [x] Custom Terminal-themed Landing Page (with React typewriter effect)
- [x] Authentication via Appwrite
- [x] Redux Store setup for global state
- [x] Form handling with React Hook Form
- [x] TinyMCE rich text editor integration
- [x] CRUD operations for Blog Posts

**Upcoming:**
- [ ] Redux Store setup for Blog Posts (Caching optimization)

## Tech Stack

**Frontend Framework & Styling**
* [React](https://react.dev/) - Core UI library
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling for the cyan-black aesthetic
* [React Router](https://reactrouter.com/) - Client-side routing

**State & Form Management**
* [Redux Toolkit](https://redux-toolkit.js.org/) - Global state management
* [React Hook Form](https://react-hook-form.com/) - Performant, flexible form validation

**Content & Rendering**
* [TinyMCE](https://www.tiny.cloud/) - Rich text editor for writing blogs
* [html-react-parser](https://www.npmjs.com/package/html-react-parser) - Safe rendering of HTML blog content

**Backend as a Service**
* [Appwrite](https://appwrite.io/) - Open-source backend for Auth, Databases, and Storage

## Getting Started

To run this project locally, you will need Node.js installed on your machine and an active Appwrite project.

1. Clone the repository:
   ```bash
   git clone [https://github.com/Howdie-da/wireframe.git](https://github.com/Howdie-da/wireframe.git)
   ```

2. Navigate into the project directory:
   ```bash
   cd wireframe
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables. Create a `.env` file in the root directory and add your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL="YOUR_APPWRITE_URL"
   VITE_APPWRITE_PROJECT_ID="YOUR_PROJECT_ID"
   VITE_APPWRITE_DATABASE_ID="YOUR_DATABASE_ID"
   VITE_APPWRITE_COLLECTION_ID="YOUR_COLLECTION_ID"
   VITE_APPWRITE_BUCKET_ID="YOUR_BUCKET_ID"
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Author
Developed by Akshat.