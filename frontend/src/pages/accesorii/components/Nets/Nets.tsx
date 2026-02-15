import React from 'react';
import { Shield, Grid, Layers } from 'lucide-react';
import './Nets.scss';

const MosquitoNets: React.FC = () => {
  return (
    <section className="mosquito-nets">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-col">
            <h2>Plase Anti-Insecte</h2>
            <p className="description">
              Protejează-ți locuința de musafiri nepoftiți fără a bloca aerul proaspăt. 
              Oferim o gamă variată de plase, adaptate pentru orice tip de fereastră sau ușă.
            </p>
            
            <ul className="features-list">
              <li>
                <Grid size={20} className="icon" />
                <div>
                  <strong>Plase pe balamale</strong>
                  <span> - Soluția clasică și economică, ideală pentru ferestrele deschise frecvent.</span>
                </div>
              </li>
              <li>
                <Layers size={20} className="icon" />
                <div>
                  <strong>Plase tip rulou</strong>
                  <span> - Moderne și discrete, se strâng într-o casetă deasupra ferestrei iarna.</span>
                </div>
              </li>
              <li>
                <Shield size={20} className="icon" />
                <div>
                  <strong>Plase Plisse</strong>
                  <span> - Sistem elegant glisant, perfect pentru uși de terasă și spații mari.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="image-col">
            <img 
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" 
              alt="Plasa insecte montata pe fereastra" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosquitoNets;