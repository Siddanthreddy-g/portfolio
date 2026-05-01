import { useState, useEffect, useRef } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <span className="brand-initials">GSR</span>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /> <span /> <span />
      </button>
      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link--active" : "nav-link"} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link--active" : "nav-link"} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
      </ul>
    </nav>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    resize();
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    }));
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.2)"; ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <ParticleCanvas />
        <NavBar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}