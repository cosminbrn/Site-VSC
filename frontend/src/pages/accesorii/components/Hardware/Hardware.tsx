import React from 'react';
import { Lock, DoorOpen, Palette, MousePointer2 } from 'lucide-react';
import './Hardware.scss';

const extras = [
  {
    icon: <Lock size={32} />,
    title: "Mânere Secustik",
    desc: "Mânere cu mecanism de blocare patentat pentru o siguranță sporită împotriva efracției."
  },
  {
    icon: <DoorOpen size={32} />,
    title: "Amortizoare Uși",
    desc: "Sisteme hidraulice pentru închiderea controlată și silențioasă a ușilor de trafic intens."
  },
  {
    icon: <MousePointer2 size={32} />,
    title: "Sisteme Oscilo-culisante",
    desc: "Feronerie specială pentru deschideri mari, ideală pentru ieșirile spre terasă."
  },
  {
    icon: <Palette size={32} />,
    title: "Paneluri Ornamentale",
    desc: "O gamă variată de paneluri decorative pentru uși de intrare, clasice sau moderne."
  }
];

const HardwareExtras: React.FC = () => {
  return (
    <section className="hardware-extras">
      <div className="container">
        <div className="section-header">
          <h2>Feronerie și Extra Opțiuni</h2>
          <p>Personalizează funcționalitatea și aspectul ferestrelor tale.</p>
        </div>

        <div className="extras-grid">
          {extras.map((item, index) => (
            <div key={index} className="extra-item">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareExtras;