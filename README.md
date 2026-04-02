# Yogesh — MERN Stack Portfolio

A modern, dark-themed developer portfolio built with the **MERN stack** (MongoDB, Express, React, Node.js).

## ✨ Features

- **Hero** — Animated typewriter role switcher, glitch name effect, social links
- **About** — Stats grid, live code block, skill pillars
- **Skills** — Animated progress bars grouped by category + tech badge cloud
- **Experience** — Tabbed company switcher (eCareSoftech, Maruti Suzuki, DUCAT)
- **Projects** — Fetched live from MongoDB via API with fallback
- **Achievements** — Hackathon wins + certifications
- **Contact** — Form that saves to MongoDB + optional email notification
- **Responsive** — Mobile-first, works on all screen sizes
- **Dark theme** — GitHub-inspired dark palette with blue/green accents

## 📁 Project Structure

```
yogesh-portfolio/
├── package.json              ← root (runs both)
├── server/
│   ├── index.js              ← Express entry point
│   ├── .env.example          ← copy to .env and fill in
│   ├── models/
│   │   ├── Contact.js        ← Mongoose contact schema
│   │   └── Project.js        ← Mongoose project schema
│   └── routes/
│       ├── contact.js        ← POST/GET /api/contact
│       └── projects.js       ← GET/POST /api/projects
└── client/
    ├── index.html
    ├── vite.config.js        ← proxies /api → localhost:5000
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css         ← design system (CSS vars, animations)
        ├── components/
        │   ├── Navbar.jsx + .module.css
        │   ├── Hero.jsx + .module.css
        │   ├── About.jsx + .module.css
        │   ├── Skills.jsx + .module.css
        │   ├── Experience.jsx + .module.css
        │   ├── Projects.jsx + .module.css
        │   ├── Achievements.jsx + .module.css
        │   ├── Contact.jsx + .module.css
        │   └── Footer.jsx + .module.css
        └── pages/
            └── Home.jsx
```

## 🚀 Getting Started

### 1. Install all dependencies
```bash
npm run install:all
```

### 2. Configure environment
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and email settings
```

**.env values:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yogesh_portfolio
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/yogesh_portfolio
EMAIL_USER=rajputyash072@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=rajputyash072@gmail.com
CLIENT_URL=http://localhost:5173
```

### 3. Run development servers
```bash
# From root — runs both client and server
npm run dev

# Or separately:
npm run server   # Express on :5000
npm run client   # Vite React on :5173
```

### 4. Open in browser
```
http://localhost:5173
```

## 🌐 API Endpoints

| Method | Endpoint       | Description                    |
|--------|---------------|--------------------------------|
| GET    | /api/health   | Server health check            |
| POST   | /api/contact  | Save contact message to DB     |
| GET    | /api/contact  | Get all messages (admin)       |
| GET    | /api/projects | Get all projects (auto-seeds)  |
| POST   | /api/projects | Add a new project              |

## 🏗️ Production Build

```bash
npm run build
# Outputs to client/dist — serve with Express or Nginx
```

## 🛠️ Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React 18, Vite, CSS Modules   |
| Backend  | Node.js, Express.js           |
| Database | MongoDB + Mongoose            |
| Email    | Nodemailer (Gmail)            |
| Icons    | Lucide React                  |
| Fonts    | Syne, DM Sans, DM Mono        |

## ✏️ Customization

1. **Personal info** — Edit `client/src/components/Hero.jsx`, `About.jsx`, `Experience.jsx`
2. **Projects** — Add via `POST /api/projects` or edit fallback in `Projects.jsx`
3. **Colors** — Edit CSS variables in `client/src/index.css`
4. **Resume** — Place `Yogesh_Resume.pdf` in `client/public/`
