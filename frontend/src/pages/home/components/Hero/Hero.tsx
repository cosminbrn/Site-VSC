import React from 'react'
import './Hero.scss'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Instalații PVC pentru casa ta</h1>

        {/* moved subtitle and actions into a horizontal container */}
        <div className="hero__content">
          <p className="hero__subtitle">
            Venim la dumeavoastră cu soluții personalizate pentru instalații PVC, asigurând calitate și durabilitate pentru fiecare proiect. De la consultanță până la instalare, suntem partenerul de încredere pentru nevoile dumneavoastră.
          </p>
          <div className="hero__actions">
            <div className="hero__phone">+40 744 130 916</div>
            <div className="hero__email">sebcosrl@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
