import React from 'react'
import './About.scss'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h1>Despre firmă</h1>
        <p>
          Înființată în 20XX, VSC se specializează în PVC Salamander și instalații de rulouri exterioare
          pentru rezidențiale și comerciale. Cu o echipă experimentată, oferim soluții personalizate
          care combină calitatea materialelor cu măiestria instalării.
        </p>
        <p>
          Colaborăm cu proprietari de locuințe și clienți comerciali din întreaga regiune. Proiectele variază de la
          înlocuiri de feronerie la instalații complete de vitrine — fiecare gestionat cu grijă
          și expertiză locală.
        </p>
      </div>
    </section>
  )
}

export default About
