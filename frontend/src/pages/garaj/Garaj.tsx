import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Carousel from '../common/Carousel/Carousel';
import CarouselPhoto1 from '../../assets/rulouri-carousel-001.jpg';
import CarouselPhoto2 from '../../assets/rulouri-carousel-002.jpg';

const garajSlides = [
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


function Garaj() {

  return (
    <div className="Rulouri">
        <Navbar />
        <Carousel slides={garajSlides} variant="mini" />
        <Aplicate />
        <Suprapuse />
        <Materials />
        <Install />
        <Footer />
    </div>
  );
}

export default Garaj;