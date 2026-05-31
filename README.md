# Super Duper Scooper — Website

A premium, enterprise-grade marketing site for a dog waste removal & lawn
protection company. Built with **React + Vite + Tailwind CSS + Framer Motion**
and inspired by modern SaaS aesthetics (Stripe / Linear).

## ✨ Features

- **Premium loader screen** — the Super Duper Scooper logo pops in with a floating motion, shimmer sweep, accent glow, and progress bar, then smoothly fades out (~2s). Plays on **every visit and every page refresh**.
- **Three pages** — Home, About, Contact (React Router)
- **Animated page transitions** + fade-up-on-scroll + staggered card reveals
- **Sticky, blur-on-scroll navbar** with animated mobile hamburger menu
- **Validated contact form** with success / error states
- **Fully responsive**, mobile-first
- **SEO-friendly titles & meta** per page
- Centralized, editable content in `src/data/content.js` (no lorem ipsum)

## 🎨 Brand palette

| Token        | Hex       | Tailwind class |
| ------------ | --------- | -------------- |
| Primary      | `#111827` | `ink`          |
| Secondary    | `#065F46` | `forest`       |
| Accent       | `#10B981` | `emerald`      |
| Background   | `#F9FAFB` | `canvas`       |
| Text         | `#374151` | `slate`        |

Fonts: **Bricolage Grotesque** (display) + **Plus Jakarta Sans** (body).

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

> Requires Node 18+.

## 🗂 Project structure

```
super-duper-scooper/
├── public/assets/        # logo-badge.png (nav/footer), logo-scooper.png (loader), hero-retriever.png
├── src/
│   ├── components/
│   │   ├── ui/           # Button, Icon, Reveal, SectionHeading
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageTransition.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/content.js   # all marketing copy lives here
│   ├── hooks/usePageTitle.js
│   ├── pages/            # Home, About, Contact
│   ├── App.jsx           # loader gate + routing
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── index.html
```

## ✏️ Editing content

All copy — services, testimonials, values, team, service areas, phone/email —
lives in `src/data/content.js`. Update it there and every page reflects the
change. Swap the images in `public/assets/` to rebrand.

## 📨 Wiring up the contact form

The form in `src/pages/Contact.jsx` currently simulates submission. Replace the
`await new Promise(...)` block inside `handleSubmit` with a real call to your
form/email backend (e.g. Formspree, Resend, or your API) and keep the existing
`success` / `error` state handling.
