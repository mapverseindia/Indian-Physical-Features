import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;
      const progress = (scroll / totalHeight) * 100;

      setScrollWidth(progress);

      // Add blur background when scrolled
      setScrolled(scroll > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Maps", path: "/maps" },
    { name: "Physical Features", path: "/features" },
    { name: "3D Model", path: "/model" },
    { name: "Team", path: "/team" },
  ];

  return (
    <>
      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollWidth}%` }}
      />

      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* ===== LOGO ===== */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center glow-cyan-strong">
              🌍
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide gradient-text">
                MapVerse India
              </h1>
              <p className="text-xs text-muted-foreground">
                Indian Physical Features
              </p>
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`nav-link text-sm font-medium ${
                    isActive ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="hidden md:flex items-center gap-4">

            {/* GitHub Button */}
            <a
              href="https://github.com/mapverseindia/Indian-Physical-Features"
              target="_blank"
              rel="noreferrer"
              className="btn-glow px-4 py-2 text-sm rounded-xl border border-border hover:text-cyan-400"
            >
              GitHub
            </a>

            {/* Mobile Toggle (hidden on desktop) */}
          </div>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 flex flex-col gap-4 glass border-t border-border">

            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`py-2 px-4 rounded-lg transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* GitHub mobile */}
            <a
              href="https://github.com/mapverseindia/Indian-Physical-Features"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center border border-border rounded-lg py-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ===== SPACER (so content not hidden under navbar) ===== */}
      <div className="h-20" />

      {/* ===== EXTRA EFFECTS ===== */}

      {/* Floating glow dots */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor glow */}
      <CursorGlow />
    </>
  );
};

export default Navbar;

/* ===== CURSOR GLOW COMPONENT ===== */

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
};
