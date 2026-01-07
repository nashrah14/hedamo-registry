# 🏛️ Hedamo Product Disclosure Registry

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

An institutional-grade, high-fidelity registry for managing and viewing product sustainability disclosures. Built with a focus on trust, transparency, and premium user experience.

[View Live Demo](https://hedamo-registry.vercel.app/)

---

## 💎 Design System & Aesthetic
The Hedamo Registry follows a strict "Institutional-Trust" design language:
* **Palette:** Neutral grays (`#F9FAFB`), Charcoal text (`#111827`), and Deep Navy accents (`#1E293B`).
* **Typography:** Inter (Sans-serif) for high legibility and spacing.
* **Grid:** Strict 4px/8px alignment system with generous 24px padding for cards.
* **Interactions:** Submerged transitions (200ms ease-in-out) with subtle elevation states.



---

## 🚀 Key Features

### 1. Product Registry Dashboard
* **Dynamic Filtering:** Real-time filtering by status (Draft, Submitted, Published) and product categories.
* **Intelligent Search:** Global search across product names and producer IDs.
* **Status Badging:** Visual indicators for disclosure readiness.

### 2. High-Fidelity Disclosure View
* **Version History:** A vertical timeline tracing the evolution of product disclosures.
* **Functional Attributes:** Detailed breakdown of material composition and recyclability metrics.
* **Supporting Evidence:** Document management section for authorized verification files.
* **Trust Disclaimer:** Prominent institutional advisory regarding producer-declared information.

### 3. Persistent Navigation
* **Institutional Shell:** Persistent navbar and footer that maintain context during deep-viewing sessions.
* **Responsive Architecture:** Desktop-first premium experience that stacks gracefully for mobile auditing.

---

## 🛠️ Technical Stack
* **Core:** React 18+ with Vite
* **Typing:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS v4 (PostCSS integration)
* **Icons:** Lucide React

---

## 📂 Project Structure
```text
src/
├── components/     # Specialized UI components (ProductCard, ProductDetail)
├── data/           # Structured mock data for institutional products
├── types/          # Type-safe interfaces (Product, VersionHistory)
├── App.tsx         # Centralized state and navigation logic
└── main.tsx        # Application entry point
```
### 📥 Installation & Development

To run the **Hedamo Registry** locally on your machine, follow these steps:

#### Prerequisites
* Ensure you have **Node.js** (v18.0 or higher) installed on your system.
* You can verify your version by running the following command in your terminal:
  ```bash
  node -v

#### Install Libraries
* This command reads the package.json file and installs all necessary dependencies, including React, TypeScript, and Tailwind CSS:
```bash
npm install

#### Run Development Server
* Start the Vite development server to view the registry with Hot Module Replacement (HMR):
```bash
npm run dev
* Once the server is running, open http://localhost:5173 in your browser.  

#### Production Build
* Generate a highly optimized dist/ folder containing minified assets ready for deployment:
```bash
npm run build

  <p align="center">
  © 2026 <b>Hedamo Registry</b>. All rights reserved.
</p>
