import React from 'react'
import './Services.scss'

const Services: React.FC = () => {
  const items = [
    { title: 'Window Replacement', desc: 'Energy-efficient PVC windows with professional fitting.' },
    { title: 'Door Installation', desc: 'Secure and insulated doors tailored to your property.' },
    { title: 'Commercial Projects', desc: 'Large scale storefront and office glazing solutions.' },
  ]

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h1>Our Services</h1>
        <ul className="services__list">
          {items.map((it) => (
            <li key={it.title} className="services__item">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
