// ...existing code...
import { Link } from "react-router-dom";
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
  // State for the main mobile menu (hamburger)
  const [open, setOpen] = useState(false);
  // State for the desktop dropdown submenu
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav__inner">
        <div className="nav__brand">
          <a href="/">VSC Construct</a>
        </div>

        {/* --- DESKTOP LINKS --- */}
        <div className="nav__links-desktop">
          <div className={`nav__item ${submenuOpen ? "nav__item--open" : ""}`}>
            <button
              className="nav__link nav__link--button"
              aria-haspopup="true"
              aria-expanded={submenuOpen}
              onClick={() => setSubmenuOpen((s) => !s)}
              // This onBlur is a clever way to close the menu when you click away.
              // It gives enough time for a click on a dropdown item to register.
              onBlur={() => setTimeout(() => setSubmenuOpen(false), 200)}
            >
              Domenii de practică și produse
              <span className="nav__chev" aria-hidden>▾</span>
            </button>

            <ul className="nav__dropdown" role="menu" aria-label="Domenii">
              <li role="none"><a role="menuitem" href="/feronerie">Feronerie</a></li>
              <li role="none"><a role="menuitem" href="/pvc">Uși și ferestre</a></li>
              <li role="none"><a role="menuitem" href="/rulouri">Rulouri</a></li>
            </ul>
          </div>

          <a className="nav__link" href="/#about">Despre noi</a>
          <a className="nav__link" href="/#services">Servicii</a>
          <a className="nav__link" href="/#contact">Contactați-ne</a>
        </div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {open && (
        <div className="nav__menu-mobile">
          <a className="nav__link" href="/#domains">Domenii de practică și produse</a>
          <a className="nav__link" href="/ferestre">↳ Ferestre</a>
          <a className="nav__link" href="/usi">↳ Uși</a>
          <a className="nav__link" href="/accesorii">↳ Accesorii</a>
          <a className="nav__link" href="/#about">Despre noi</a>
          <a className="nav__link" href="/#services">Servicii</a>
          <a className="nav__link" href="/#contact">Contactați-ne</a>
        </div>
      )}
    </nav>
  );
}

export default Nav;