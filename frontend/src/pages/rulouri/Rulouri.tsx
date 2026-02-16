import { useState } from 'react';
import './Rulouri.scss';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Carousel from '../common/Carousel/Carousel';
import Aplicate from './components/Aplicate/Aplicate';
import Suprapuse from './components/Suprapuse/Suprapuse';
import Materials from './components/Securitate/Securitate';
import Install from './components/Montare/Montare';
import CarouselPhoto1 from '../../assets/rulouri-carousel-001.jpg';
import CarouselPhoto2 from '../../assets/rulouri-carousel-002.jpg';

const rulouriSlides = [
  {
    id: 1,
    image: CarouselPhoto1,
    title: "Rulouri Exterioare",
    subtitle: "Protejează-ți casa de soare, vânt și priviri indiscrete."
  },
  {
    id: 2,
    image: CarouselPhoto2,
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
