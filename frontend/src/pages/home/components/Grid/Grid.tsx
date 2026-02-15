import React from 'react';
import { ArrowRight, Maximize2, ShieldCheck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Grid.scss';

const services = [
  {
    id: 1,
    title: "Ferestre & Uși PVC",
    description: "Izolație termică superioară și design modern. Profiluri Salamander și Veka.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
    link: "/ferestre-usi",
    icon: <Maximize2 />
  },
  {
    id: 2,
    title: "Rulouri Exterioare",
    description: "Control total asupra luminii și securitate sporită. Manuale sau automatizate.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
    link: "/rulouri",
    icon: <ShieldCheck />
  },
  {
    id: 3,
    title: "Accesorii & Feronerie",
    description: "Plase insecte, glafuri și mânere premium pentru confortul casei tale.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    link: "/accesorii",
    icon: <PenTool />
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>Soluțiile Noastre</h2>
          <p>Calitate germană, montaj profesionist și garanție extinsă pentru fiecare proiect.</p>
        </div>

        <div className="grid-container">
          {services.map((service) => (
            <Link to={service.link} key={service.id} className="service-card">
              <div 
                className="card-bg" 
                style={{ backgroundImage: `url(${service.image})` }} 
              />
              <div className="card-overlay"></div>
              
              <div className="card-content">
                <div className="icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="cta-link">
                  Detalii <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;