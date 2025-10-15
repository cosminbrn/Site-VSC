import { useState } from "react";
import "./Nav.scss";

function IconMenu() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="6" width="18" height="2" fill="currentColor" rx="1" />
      <rect x="3" y="11" width="18" height="2" fill="currentColor" rx="1" />
      <rect x="3" y="16" width="18" height="2" fill="currentColor" rx="1" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav__inner">
        <div className="nav__brand">
          <a href="#">VSC Construct</a>
        </div>

        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#services">Areas of Practice</a>
          <a href="#team">Our Team</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </div>

        
      </div>

    </nav>
  );
}

export default Nav;