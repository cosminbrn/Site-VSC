import { useState } from 'react';
import './Rulouri.scss';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Auto from './components/Auto/Auto';
import Manual from './components/Manual/Manual';
import Materials from './components/Materials/Materials';
import Install from './components/Install/Install';
import Carousel from '../common/Carousel/Carousel';

const rulouriSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=2000",
    title: "Rulouri Exterioare",
    subtitle: "Protejează-ți casa de soare, vânt și priviri indiscrete."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
    title: "Automatizare Smart",
    subtitle: "Controlează lumina din casă cu o singură atingere."
  }
]


function Rulouri() {

  return (
    <div className="Rulouri">
        <Navbar />
        <Carousel slides={rulouriSlides} variant="mini" />
        <Auto />
        <Manual />
        <Materials />
        <Install />
        <Footer />
    </div>
  );
}

export default Rulouri;
