
import React from 'react'
import Footer from '../common/Footer/Footer'
import Navbar from '../common/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Carousel from '../common/Carousel/Carousel'
import Grid from './components/Grid/Grid';
import Photo1 from '../../assets/landing-carousel-001.jpeg'

const homeSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    title: "Confort și Eficiență Termică",
    subtitle: "Ferestre Salamander cu geam tripan pentru o casă călduroasă."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2000&auto=format&fit=crop",
    title: "Rulouri Exterioare Inteligente",
    subtitle: "Protecție solară și intimitate, acționate prin telecomandă."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    title: "Design Modern",
    subtitle: "Soluții premium pentru închiderea teraselor și balcoanelor."
  }
];

const Home: React.FC = () => {
	return (
		<div className="Home">
			<Navbar />
			<Carousel slides={homeSlides} variant="full"/>
			<Grid />
			<Hero />
			<main>
          <About />
			    <Services />
			    <Contact />
      </main>
			<Footer />
		</div>
	)
}

export default Home
