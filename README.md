# 📒 Contact Book App

A full-stack web application for managing contacts. Users can add, view, and delete contacts through a responsive interface. The app supports pagination for efficient data fetching and provides both client- and server-side validation.

---

## ✨ Features

- **Add Contacts:** Create new contacts with validation.
- **View Contacts:** List contacts with pagination.
- **Delete Contacts:** Remove contacts easily.
- **Responsive UI:** Optimized for mobile and desktop.
- **Secure Validation:** Frontend + backend input validation.

---

## 🛠 Tech Stack

**Frontend**
- React
- Axios (API calls)
- CSS

**Backend**
- Node.js + Express
- MongoDB (or SQLite)
- Mongoose (for MongoDB)
- CORS
- Dotenv

---

## 📁 Project Structure

```text
contact-book-app/
├── backend/                 # Node.js/Express server and API
│   ├── models/              # Mongoose models (e.g., Contact.js)
│   ├── index.js            # Entry point for backend
│   ├── package.json
│   └── .env                 # Environment variables (not committed)
│
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│  
│
├── .gitignore
└── README.md


---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or SQLite locally)

---

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/contact-book-app.git
cd contact-book-app

````
---
### 3. Backend Setup

```bash
cd backend
npm install
```

Create a .env file in backend with your environment variables:

MONGO_URI=your_mongo_connection_string
PORT=5000


Start the server (with nodemon if installed):

```bash
npm run dev    # or: node server.js

```

---

### 4. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
npm start

```


This runs the React development server (default at http://localhost:3000).
