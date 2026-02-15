import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import './Portofoliu.scss';

const works = [
  { id: 1, title: 'Vilă Mamaia Nord', category: 'Ferestre Antracit', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Apartament Constanța', category: 'Balcon Închis', img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Casă Ovidiu', category: 'Rulouri Exterioare', img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Spațiu Comercial', category: 'Uși Glisante', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Renovare Apartament', category: 'Tâmplărie Albă', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Montaj Rulouri', category: 'Automatizări', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600' },
];

const Portofoliu = () => {
  return (
    <>
      <Navbar />
      <div className="portfolio-page">
        <h1>Portofoliu Lucrări VSC Construct</h1>
        <p className="subtitle">O selecție a proiectelor noastre recente din Dobrogea</p>
        
        <div className="gallery-grid">
          {works.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portofoliu;