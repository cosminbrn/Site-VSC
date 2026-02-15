import React from 'react';
import { ShieldCheck, Thermometer, Wind, Maximize2, Layers, CheckCircle } from 'lucide-react';
import './Profiles.scss';

const ProfilesSection = () => {
  return (
    <section className="profiles-section">
      <div className="container">
        <div className="section-title">
          <h2>Profile Premium Salamander</h2>
          <p>Calitate germană, izolație termică superioară și design modern.</p>
        </div>

        <div className="profiles-grid">
          {/* Card 1 */}
          <div className="profile-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800" alt="Salamander Streamline 76" />
            </div>
            <div className="card-content">
              <h3>Streamline 76</h3>
              <ul className="specs-list">
                <li><Maximize2 size={18} /> Adâncime: 76mm</li>
                <li><Layers size={18} /> 5 sau 7 camere</li>
                <li><Wind size={18} /> 2 garnituri etanșare</li>
                <li><ShieldCheck size={18} /> Protecție fonică</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="profile-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Salamander BluEvolution 92" />
            </div>
            <div className="card-content">
              <h3>BluEvolution 92</h3>
              <ul className="specs-list">
                <li><Maximize2 size={18} /> Adâncime: 92mm</li>
                <li><Layers size={18} /> 6 camere (Clasa A)</li>
                <li><Thermometer size={18} /> Ideal Case Pasive</li>
                <li><Wind size={18} /> 3 garnituri etanșare</li>
              </ul>
            </div>
          </div>
          
           {/* Card 3 */}
           <div className="profile-card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Culori" />
            </div>
            <div className="card-content">
              <h3>Design & Culori</h3>
              <ul className="specs-list">
                <li><CheckCircle size={18} /> Alb Standard</li>
                <li><CheckCircle size={18} /> Antracit / Gri</li>
                <li><CheckCircle size={18} /> Stejar Auriu / Nuc</li>
                <li><CheckCircle size={18} /> Înfoliere duală</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;