# WIREFRAME 🖋️

A high-performance, minimalist blogging platform built with React, Redux Toolkit, and Appwrite. 

Designed with a focus on speed and user experience, Wireframe utilizes an aggressive "Eager Loading" state management architecture to eliminate network wait times, delivering an instant, buttery-smooth reading experience.

**[Live Demo](https://your-live-link-here.com)**

## 🚀 Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **State Management:** Redux Toolkit (RTK)
* **Routing:** React Router
* **Forms & Validation:** React Hook Form
* **Rich Text Editor:** TinyMCE
* **Backend / BaaS:** Appwrite (Auth, Database, Storage)

## ✨ Key Features

* **Complete Authentication:** Secure email/password login and signup flow.
* **Full CRUD Operations:** Create, read, update, and delete blog posts.
* **Rich Text Formatting:** Embedded TinyMCE editor for highly customized article layouts.
* **Image Management:** Seamless image uploading, rendering, and automatic storage cleanup upon post deletion.
* **Redux Cache-First Architecture:** Posts are eagerly loaded into the global state upon authentication. Navigating between feeds and individual posts happens with zero network latency.
* **Protected Routes:** Component-level security ensures that only post authors can see or access the Edit and Delete controls for their specific content.

## 🧠 Architectural Highlights

### The "Zero-Latency" Read Experience
Instead of fetching data from the database every time a user clicks a post, Wireframe intercepts the network request and checks the global Redux store first. If the data is cached, the UI renders instantly. A network fallback is securely in place to handle direct URL sharing.

### Centralized Service Classes
Database and Authentication logic is completely decoupled from the React components. Custom `appwriteService` and `authService` classes handle all backend communication, keeping the UI components clean, readable, and highly maintainable.

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

## Future Roadmap
User Profile Pages

Comment Section & Like functionality

Dark/Light Mode Toggle

Markdown Support

## Author
Developed by Akshat.