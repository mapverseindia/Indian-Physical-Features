// ======================================================
// MAIN ENTRY FILE (VITE + REACT)
// Author: Zaeem Bhat (MapVerse India)
// ======================================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ======================================================
// GLOBAL CONFIGURATION
// ======================================================

// Smooth scroll fix for all browsers
const enableSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = "smooth";
};

// Prevent horizontal overflow issues
const preventOverflow = () => {
  document.body.style.overflowX = "hidden";
};

// Set page title dynamically
const setTitle = () => {
  document.title = "MapVerse India - Physical Features";
};

// Add favicon dynamically (optional fallback)
const setFavicon = () => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = "/favicon.ico";
  document.head.appendChild(link);
};

// Initialize global UI settings
const initUI = () => {
  enableSmoothScroll();
  preventOverflow();
  setTitle();
  setFavicon();
};

// ======================================================
// PERFORMANCE + ERROR HANDLING
// ======================================================

// Global error handler (prevents crash)
window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global Error:", message);
};

// Unhandled promise rejection handler
window.onunhandledrejection = function (event) {
  console.error("Unhandled Promise:", event.reason);
};

// ======================================================
// ROOT RENDER FUNCTION
// ======================================================

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check index.html");
}

const root = ReactDOM.createRoot(rootElement);

// Initialize UI before render
initUI();

// ======================================================
// RENDER APP
// ======================================================

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ======================================================
// OPTIONAL: PERFORMANCE LOGGING
// ======================================================

const logPerformance = () => {
  if (performance) {
    console.log("Page Load Time:", performance.now());
  }
};

window.addEventListener("load", logPerformance);

// ======================================================
// OPTIONAL: CURSOR GLOW ACTIVATION
// ======================================================

const createCursorGlow = () => {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
};

// Enable cursor glow (matches your CSS)
createCursorGlow();

// ======================================================
// OPTIONAL: SCROLL PROGRESS BAR
// ======================================================

const createScrollBar = () => {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / height) * 100;
    bar.style.width = `${progress}%`;
  });
};

createScrollBar();

// ======================================================
// OPTIONAL: STAR BACKGROUND EFFECT
// ======================================================

const createStars = () => {
  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(star);
  }
};

createStars();

// ======================================================
// FINAL LOG
// ======================================================

console.log("MapVerse India Loaded Successfully 🚀");
