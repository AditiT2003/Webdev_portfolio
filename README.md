# Aditi Tanwar — Developer Portfolio

A frontend development and UI/UX design portfolio for Aditi Tanwar.

## Run locally

```bash
npm install
npm run dev
```

## Structure

```text
src/
├── components/
│   ├── CursorGlow.jsx
│   ├── Home.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── ProjectPage.jsx
├── data/
│   └── portfolio.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Notes

- Navbar is sticky and remains visible while scrolling.
- Experience uses a vertical timeline layout.
- Project cards transition into animated case-study pages.
- Framer Motion powers the loading, reveal, hover and page transitions.
- Portfolio data is separated from UI components for easier editing.
