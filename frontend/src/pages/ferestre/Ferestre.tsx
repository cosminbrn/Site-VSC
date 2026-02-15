import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Carousel from '../common/Carousel/Carousel';
import './Ferestre.scss';

const ferestreSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=2000",
    title: "Profile Salamander",
    subtitle: "Tehnologie germană de top pentru izolație perfectă."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    title: "Feronerie Roto & Maco",
    subtitle: "Siguranță antiefracție și durabilitate garantată."
  }
];

const Ferestre = () => {
  return (
    <>
      <Navbar />
      <Carousel slides={ferestreSlides} variant="mini" />
      <div className="ferestre-page">

        <section className="tech-section">
          <h2>Profilele Noastre</h2>
          <div className="profiles-grid">


            <div className="profile-card">
              <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800" alt="Salamander Streamline" />
              <div className="card-content">
                <h3>Salamander Streamline 76</h3>
                <ul>
                  <li>Adâncime constructivă: <strong>76mm</strong></li>
                  <li>Număr camere: <strong>5 sau 7</strong></li>
                  <li>Sticlă: Până la 40mm</li>
                  <li>Ideal pentru: Apartamente și renovări</li>
                </ul>
              </div>
            </div>


            <div className="profile-card">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" alt="Salamander BluEvolution" />
              <div className="card-content">
                <h3>Salamander BluEvolution 92</h3>
                <ul>
                  <li>Adâncime constructivă: <strong>92mm</strong></li>
                  <li>Număr camere: <strong>6 camere</strong></li>
                  <li>Sticlă: Tripan (3 foi) până la 52mm</li>
                  <li>Ideal pentru: Case pasive / Eficiență maximă</li>
                </ul>
              </div>
            </div>

          </div>
        </section>


        <section className="details-split">
          <div className="text">
            <h2>Feronerie ROTO / MACO</h2>
            <p>
              Folosim exclusiv feronerie de top pentru a garanta peste 15.000 de cicluri de închidere-deschidere.
              Sistemele noastre includ:
            </p>
            <br />
            <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
              <li>Microventilație inclusă standard</li>
              <li>Protecție antiefracție</li>
              <li>Mânere ergonomice din aluminiu</li>
            </ul>
          </div>
          <div className="image">
            <img src="https://images.unsplash.com/photo-1502005229762-cf1e2a862d43?auto=format&fit=crop&q=80&w=800" alt="Feronerie fereastra" />
          </div>
        </section>


        <section className="details-split reversed">
          <div className="text">
            <h2>Sticlă Termopan & Tripan</h2>
            <p>
              Calitatea sticlei ocupă 80% din suprafața ferestrei. Oferim pachete de sticlă
              Low-E (emisivitate redusă) și 4 Seasons (control solar) cu gaz Argon.
            </p>
          </div>
          <div className="image">
            <img src="https://images.unsplash.com/photo-1596249563870-7b24e6a04871?auto=format&fit=crop&q=80&w=800" alt="Sticla termopan" />
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Ferestre;