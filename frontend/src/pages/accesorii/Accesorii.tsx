import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HeroCarousel from '../common/Carousel/Carousel';

// Importăm componentele secțiunilor
import MosquitoNets from './components/Nets/Nets';
import WindowSills from './components/Sills/Sills';
import HardwareExtras from './components/Hardware/Hardware';

import './Accesorii.scss';

const accesoriiSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=2000",
    title: "Accesorii Premium",
    subtitle: "Detaliile care fac diferența în confortul casei tale."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
    title: "Soluții Complete",
    subtitle: "Plase anti-insecte, glafuri și feronerie de siguranță."
  }
];

const Accesorii = () => {
  return (
    <div className="Accesorii">
      <Navbar />
      <HeroCarousel slides={accesoriiSlides} variant="mini" />
      
      <div className="accesorii-page">
        <MosquitoNets />
        <WindowSills />
        <HardwareExtras />
      </div>

      <Footer />
    </div>
  );
};

export default Accesorii;