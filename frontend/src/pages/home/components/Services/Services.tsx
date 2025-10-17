import React from 'react'
import './Services.scss'

const Services: React.FC = () => {
  const items = [
    { title: 'Înlocuirea feronerie', desc: 'Feronerii PVC eficiente din punct de vedere energetic, cu montaj profesional.' },
    { title: 'Montare uși și ferestre', desc: 'Uși și ferestre securizate și izolate, adaptate proprietății dumneavoastră.' },
    { title: 'Rulouri', desc: 'Rulouri manuale sau automate pentru orice doriți.' },
  ]

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h1>Serviciile noastre</h1>
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
