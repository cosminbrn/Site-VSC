import React from 'react'
import './Hero.scss'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Reliable PVC Installations for Your Home & Business</h1>
        <p className="hero__subtitle">
          We deliver high-quality windows and doors with fast turnaround, professional installation,
          and a 5-year workmanship warranty. Trusted by local homeowners and businesses.
        </p>
        {/* <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">Request a Quote</a>
          <a className="btn btn--ghost" href="#services">Our Services</a>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
