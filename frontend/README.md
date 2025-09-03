# Frontend (React + Vite)

This folder contains the frontend code for the Diabetes Classification full stack app. The frontend is built with React and Vite, providing a fast and modern user interface for interacting with the ML backend.

## 📦 Contents
- `src/` — React source code (components, pages, assets)
- `public/` — Static assets
- `index.html` — Main HTML file
- `package.json` — Project dependencies and scripts
- `vite.config.js` — Vite configuration

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## 🔗 Connecting to the Backend
- The frontend expects the ML API to be running (see `../ML/README.md`).
- Update API URLs in the frontend code if your backend runs on a different host/port.

## 📝 Notes
- Built with React, Vite, and modern JavaScript.
- For production, build with `npm run build` and deploy the `dist/` folder.

---

For more details, see the main project README in the root folder.
