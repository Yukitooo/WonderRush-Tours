# WonderRush Tours

A modern, user-friendly tour booking web app built with **React + TypeScript** and powered by a **PocketBase** backend.

## ✨ Features

- Beautiful, responsive frontend with a friendly color scheme
- Book tours with custom details (name, email, dates, package, etc.)
- PocketBase backend for fast, simple data storage
- Clean code structure for easy maintenance and scaling
- Test scripts for backend integration

## 🚀 Tech Stack

- **Frontend:** React, TypeScript, Vite, CSS (Poppins font, custom palette)
- **Backend:** PocketBase (self-hosted, lightweight)
- **Other:** Test scripts, modular code

## 📦 Project Structure

```
WonderRush/
├── public/                # Static assets
├── src/
│   ├── components/        # React UI components (Navbar, Header, etc.)
│   ├── datas/             # Types, test scripts, data utilities
│   ├── pb/                # PocketBase API integration
│   ├── pictures/          # Images
│   ├── App.tsx            # Main app
│   └── index.css          # Global styles
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## 📝 Customization

- Edit color scheme and fonts in `index.css` and component CSS files.
- Add new fields or features by updating the types in `src/datas/types.ts` and the PocketBase schema.

## 📄 License

MIT
