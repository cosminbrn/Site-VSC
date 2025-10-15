import React from 'react'
import './About.scss'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h1>About Our Firm</h1>
        <p>
          Established in 2010, Site-VSC specializes in PVC windows, doors, and custom fittings.
          Our team focuses on durable materials, energy efficiency, and clear communication from
          quote to completion.
        </p>
        <p>
          We work with homeowners and commercial clients across the region. Projects range from
          single-window replacements to full storefront installations — each handled with care
          and local expertise.
        </p>
      </div>
    </section>
  )
}

export default About
