import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        // Start fade out
        setTimeout(() => {
          setFadeOut(true);

          // Trigger parent (hide loader)
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 800);
        }, 500);
      }
      setProgress(value);
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 bg-hero" />

      {/* ===== CENTER CONTENT ===== */}
      <div className="relative flex flex-col items-center gap-8">

        {/* ===== MAIN LOADER RING ===== */}
        <div className="relative">
          <div className="loader-ring w-20 h-20 rounded-full animate-spin"></div>

          {/* Glow overlay */}
          <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30 animate-pulse"></div>
        </div>

        {/* ===== TITLE ===== */}
        <div className="text-center">
          <h1 className="text-2xl font-bold gradient-text tracking-wide">
            MapVerse India
          </h1>

          <p className="text-sm text-muted-foreground mt-1">
            Loading India's Geography...
          </p>
        </div>

        {/* ===== PROGRESS BAR ===== */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ===== PROGRESS TEXT ===== */}
        <p className="text-xs text-muted-foreground">
          {Math.floor(progress)}%
        </p>

        {/* ===== LOADING DOTS ===== */}
        <div className="flex gap-2 mt-2">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* ===== EXTRA GLOW TEXT ===== */}
        <p className="text-xs glow-text-cyan mt-2">
          Preparing Maps & Data...
        </p>
      </div>
    </div>
  );
};

export default Loader;
