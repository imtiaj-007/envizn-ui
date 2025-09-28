<div align="center">
  <br />
    <h1>Envizn UI - Baliwithflow Landing Page</h1>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextjs" />
    <img src="https://img.shields.io/badge/-React.js-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logoColor=white&logo=github&color=181717" alt="github" />
    <img src="https://img.shields.io/badge/-Netlify-black?style=for-the-badge&logoColor=white&logo=netlify&color=00C7B7" alt="netlify" />    
  </div>

  <h3 align="center">A modern, responsive landing page built with Next.js 15, React 19, TypeScript.</h3>

  <br />
  <a href="https://envizn-ui.netlify.app/" target="_blank" style="display: inline-block; background-color: #646CFF; color: white; padding: 8px 16px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 16px; transition: background-color 0.2s ease;">
    🚀 Live Demo - Visit Website
  </a>
  <br />
</div>

## ✨ Features

### 🖼️ Layout

-   Responsive **navbar** and **footer**.
-   Integrated **shadcn/ui** components like `Button`, `Card`, `Sheet`, etc.

### 🎯 Hero Section

-   Bento grid component for dynamic image rendering.
-   UI types & constants for structured configuration.
-   Updated global styles for navbar & footer.

### 📢 Call To Action (CTA)

-   Pixel-perfect CTA section aligned with Figma design.
-   Carefully positioned images for visual impact.
-   Minor layout & CSS fixes.

### 💬 Testimonials

-   Responsive testimonial section with carousel.
-   Integrated **shadcn/ui carousel** for smooth interactions.
-   Custom styling to match project branding.

### 🔄 Comparison Section

-   Carousel-based comparison for trips & packages.
-   Custom card design with trip/package details.
-   Modified badge & variant components for project use.

### 📌 Sticky Wrapper & Booking Form

-   Sticky wrapper for persistent overview display.
-   Booking form with **Zod validation** & `react-hook-form`.
-   Site overview component merging intermediate sections.
-   Form elements powered by **shadcn/ui**.

### 🎁 Offerings Section

-   Responsive offerings showcase.
-   Reusable **dashed border** element for design consistency.
-   Constants & types for dynamic UI rendering.

### 🌍 User Experiences

-   Interactive carousel of user experiences.
-   Responsive cards with image + title.
-   UI and navigation improvements.

### 🔎 Discover Section

-   Discover features with slot booking calendar.
-   Integrated **react-day-picker** for date selection.
-   Custom-styled calendar & booking UI.

### ❓ FAQ Section

-   Responsive FAQ with **shadcn/ui accordion**.
-   Embedded location maps in the first FAQ.
-   Padding & layout fixes for overall consistency.

---

## 🛠️ Tech Stack

-   **Next.js 15 (App Router)**
-   **TypeScript**
-   **Tailwind CSS**
-   **shadcn/ui** components
-   **Zod + react-hook-form** (form validation)
-   **react-day-picker** (calendar & slot booking)

---

## 🚀 Getting Started

### 1. Clone and Install

Clone the repository:

```bash
git clone https://github.com/imtiaj-007/envizn-ui.git
cd envizn-ui
```

Install dependencies:

```bash
npm install
```

### 2. Environment Configuration

Create environment files for each mode:

```bash
# Development
cp .env.example .env.local

# Production
cp .env.example .env.production
```

**Required environment variables:**

```bash
NEXT_PUBLIC_MAPS_API_KEY=maps_api-key
```

### 3. Development Server

Run the development server:

```bash
npm dev
```

Your app should now be running at:

```
http://localhost:3000
```

---

## 📂 Folder Structure

```
.
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions & constants
├── styles/              # Global & module CSS
└── public/              # Static assets (images, icons)
```

### Development Guidelines

-   Follow conventional commit messages
-   Maintain 80% test coverage
-   Use TypeScript strict mode
-   Follow ESLint and Prettier rules
-   Write meaningful tests for new features

## 📄 License | ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

-   **React Team** - For the amazing React 19
-   **Next Js Team** - For the lightning-fast build tool
-   **Tailwind CSS** - For the utility-first CSS framework
-   **ShadCN UI** - For accessible UI primitives
