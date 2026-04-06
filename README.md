# WIREFRAME
> A minimalist, night-themed blogging platform. Just the words, Nothing else.

An open-source, distraction-free blogging platform built for those who want to escape the algorithm. Wireframe strips away the clutter, relying on a sleek cyan-black terminal aesthetic to put the focus exactly where it belongs: the writing.

## Current Status (Phase 1: Foundation)

This repository is currently in active development. The core UI layout and routing architecture have been established, setting the stage for backend integration.

**Completed:**
- [x] React Router architecture setup
- [x] Production-ready responsive Header & Footer
- [x] Custom Terminal-themed Landing Page (with React typewriter effect)

**Upcoming:**
- [ ] Authentication via Appwrite
- [ ] Redux Store setup for global state
- [ ] TinyMCE rich text editor integration
- [ ] CRUD operations for Blog Posts
- [ ] Form handling with React Hook Form

## Tech Stack

**Frontend Framework & Styling**
* [React](https://react.dev/) - Core UI library
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling for the cyan-black aesthetic
* [React Router](https://reactrouter.com/) - Client-side routing

**State & Form Management (Upcoming)**
* [Redux Toolkit](https://redux-toolkit.js.org/) - Global state management
* [React Hook Form](https://react-hook-form.com/) - Performant, flexible form validation

**Content & Rendering (Upcoming)**
* [TinyMCE](https://www.tiny.cloud/) - Rich text editor for writing blogs
* [html-react-parser](https://www.npmjs.com/package/html-react-parser) - Safe rendering of HTML blog content

**Backend as a Service (Upcoming)**
* [Appwrite](https://appwrite.io/) - Open-source backend for Auth, Databases, and Storage

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/wireframe.git](https://github.com/yourusername/wireframe.git)