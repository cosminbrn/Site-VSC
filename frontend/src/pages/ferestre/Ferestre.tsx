import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HeroCarousel from '../common/Carousel/Carousel';

// Importăm noile componente
import ProfilesSection from './components/Profiles/Profiles';
import DetailsSection from './components/Details/Details';

import './Ferestre.scss';

const ferestreSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=2000",
    title: "Tehnologie Germană",
    subtitle: "Profile Salamander pentru o viață."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
    title: "Eficiență Energetică",
    subtitle: "Redu facturile la încălzire considerabil."
  }
];

const Ferestre = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel slides={ferestreSlides} variant="mini" />

      <div className="ferestre-page">
        <ProfilesSection />
        <DetailsSection />
      </div>
      
      <Footer />
    </>
  );
};

export default Ferestre;