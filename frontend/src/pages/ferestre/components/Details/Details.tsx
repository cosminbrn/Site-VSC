import React from 'react';
import { ShieldCheck, Thermometer, Wind, Layers, CheckCircle } from 'lucide-react';
import './Details.scss';

const DetailsSection = () => {
  return (
    <section className="details-section">
      <div className="container">
        
        {/* Rand 1 */}
        <div className="feature-row">
          <div className="text-col">
            <h3>Feronerie Roto NX / Maco</h3>
            <p>
              Sistemele noastre includ feronerie de top, tratată anticoroziv, care garantează etanșeitate perfectă timp de zeci de ani.
            </p>
            <div className="feature-points">
              <div className="point">
                <div className="icon-box"><ShieldCheck size={20} /></div>
                Puncte de închidere antiefracție
              </div>
              <div className="point">
                <div className="icon-box"><Wind size={20} /></div>
                Microventilație inclusă standard
              </div>
              <div className="point">
                <div className="icon-box"><CheckCircle size={20} /></div>
                Mânere secustik din aluminiu
              </div>
            </div>
          </div>
          <div className="image-col">
            <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800" alt="Feronerie" />
          </div>
        </div>

        {/* Rand 2 */}
        <div className="feature-row reversed">
          <div className="text-col">
            <h3>Sticlă Termopan & Tripan</h3>
            <p>
              Folosim pachete de sticlă Saint-Gobain cu gaz Argon pentru o barieră termică reală. Calitatea sticlei face diferența în confortul casei tale.
            </p>
            <div className="feature-points">
              <div className="point">
                <div className="icon-box"><Thermometer size={20} /></div>
                Sticlă 4 Seasons (Control Solar)
              </div>
              <div className="point">
                <div className="icon-box"><Layers size={20} /></div>
                Tripan până la 52mm
              </div>
              <div className="point">
                <div className="icon-box"><ShieldCheck size={20} /></div>
                Baghetă caldă (Warm Edge)
              </div>
            </div>
          </div>
          <div className="image-col">
            <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800" alt="Sticla" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailsSection;