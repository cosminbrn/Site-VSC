import React from 'react';
import './Securitate.scss';

const Securitate: React.FC = () => {
  return (
    <section className="security-section">
      <div className="security-section__container">
        <div className="security-section__content">
          <div className="badge">Siguranță</div>
          <h2>Cleme Antiefractie</h2>
          <p className="description">
            Securitatea casei tale este prioritară. Rulourile noastre sunt echipate cu 
            sisteme de blocare automată care împiedică ridicarea forțată a covorului de lamele 
            din exterior.
          </p>
          
          <ul className="features-list">
            <li>
              <strong>Blocare Automată:</strong> Clemele se activează instantaneu când ruloul este complet închis.
            </li>
            <li>
              <strong>Invizibile:</strong> Sistemul este integrat în caseta ruloului, fără a afecta estetica.
            </li>
            <li>
              <strong>Rezistență Sporită:</strong> Protecție eficientă împotriva tentativelor de efracție.
            </li>
          </ul>
        </div>

        <div className="security-section__visual">
          {/* SVG pentru simbolul de scut/siguranta */}
          <div className="icon-wrapper">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Securitate;