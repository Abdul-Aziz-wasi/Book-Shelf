# 📚 Virtual Bookshelf

**Virtual Bookshelf** is a full-stack web application that allows users to manage and share their personal book collections. Users can track reading progress, write and view reviews, upvote popular books, and visualize their reading habits—all in one place.

---

## ✨ Features

- ✅ **Add Books**: Users can add books with details like title, author, cover image, reading status (`Read`, `Reading`, `Want to Read`), and category.
- 🗒️ **Book Reviews**: Write, edit, and delete reviews for books you've read. View reviews from other readers.
- 👍 **Upvote Books**: Highlight great reads by upvoting books added by others.
- 📊 **Progress Visualization**: Track your reading progress with visual summaries (e.g., number of books read by category).
- 🔐 **Authentication**: Sign up and sign in using email/password or Google authentication via Firebase.
- 🔒 **User-Specific Content**: Only the user who added a book or review can update or delete it.

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router DOM**
- **Tailwind CSS** (for styling)
- **Lottie** (for animations)
- **Firebase Authentication**

### Backend
- **Node.js**
- **Express**
- **MongoDB** (with Mongoose)
- **JWT / Firebase Admin SDK** (for securing routes)

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- MongoDB database (local or hosted)
- Firebase project with Authentication enabled

### Backend Setup

```bash
cd backend
npm install
npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
