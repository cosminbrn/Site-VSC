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
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav__inner">
        <div className="nav__brand">
          <Link to="/">VSC Construct</Link> 
        </div>

        {/* --- DESKTOP LINKS --- */}
        <div className="nav__links-desktop">
          <div className={`nav__item ${submenuOpen ? "nav__item--open" : ""}`}>
            <button
              className="nav__link nav__link--button"
              onClick={() => setSubmenuOpen((s) => !s)}
              onBlur={() => setTimeout(() => setSubmenuOpen(false), 200)}
            >
              Produse
              <span className="nav__chev" aria-hidden>▾</span>
            </button>

            <ul className="nav__dropdown">
              {/* Am unificat Feronerie si PVC in pagina de Ferestre momentan */}
              <li><Link to="/ferestre-usi">Ferestre și Uși PVC</Link></li>
              <li><Link to="/rulouri">Rulouri Exterioare</Link></li>
              <li><Link to="/accesorii">Accesorii & Feronerie</Link></li>
            </ul>
          </div>

          <Link className="nav__link" to="/portofoliu">Portofoliu</Link>
          <a className="nav__link" href="/#about">Despre noi</a> {/* Ancora ramane cu href pt scroll */}
          <a className="nav__link" href="/#contact">Contact</a>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {open && (
        <div className="nav__menu-mobile">
          <Link className="nav__link" to="/ferestre-usi" onClick={() => setOpen(false)}>Ferestre și Uși</Link>
          <Link className="nav__link" to="/rulouri" onClick={() => setOpen(false)}>Rulouri</Link>
          <Link className="nav__link" to="/portofoliu" onClick={() => setOpen(false)}>Portofoliu</Link>
          <Link className="nav__linK" to="/accesorii" onClick={() => setOpen(false)}>Accesorii</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;