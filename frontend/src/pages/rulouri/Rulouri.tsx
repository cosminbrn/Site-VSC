import { useState } from 'react';
import './Rulouri.scss';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Aplicate from './components/Aplicate/Aplicate';
import Suprapuse from './components/Suprapuse/Suprapuse';
import Materials from './components/Materials/Materials';
import Install from './components/Install/Install';
import Carousel from '../common/Carousel/Carousel';

const rulouriSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=800",
    title: "Rulouri Exterioare",
    subtitle: "Protejează-ți casa de soare, vânt și priviri indiscrete."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
    title: "Automatizare Smart",
    subtitle: "Controlează lumina din casă cu o singură atingere."
  }
]


function Rulouri() {

  return (
    <div className="Rulouri">
        <Navbar />
        <Carousel slides={rulouriSlides} variant="mini" />
        <Aplicate />
        <Suprapuse />
        <Materials />
        <Install />
        <Footer />
    </div>
  );
}

export default Rulouri;
