import React from 'react'
import './Footer.scss'
// It's a good idea to use an icon library for social links
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                {/* Column 1: Brand & Tagline */}
                <div className="footer__col">
                    <h4 className="footer__col-title">VSC</h4>
                    <p className="footer__col-text">
                        PVC și aluminiu de calitate superioară pentru confort și eficiență energetică.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer__col">
                    <h4 className="footer__col-title">Sari La</h4>
                    <ul className="footer__list">
                        <li><a href="#about">Despre Noi</a></li>
                        <li><a href="#services">Servicii</a></li>
                        <li><a href="#contact">Contactați-ne</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Information */}
                <div className="footer__col">
                    <h4 className="footer__col-title">Contacteaza-ne</h4>
                    <ul className="footer__list">
                        <li><a href="tel:+40123456789">+40 753 806 966</a></li>
                        <li><a href="mailto:contact@vsc-construct.ro">sebcosrl@gmail.com</a></li>
                        <li>Str. Nationala Nr. 53, Constanta</li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__copyright">
                    © {new Date().getFullYear()} VSC Construct. All rights reserved.
                </div>
                <div className="footer__social">
                    {/* Replace with your actual social links */}
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer