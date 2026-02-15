import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

const Portofoliu = () => {
  return (
    <>
      <Navbar />
      <div className="page-content" style={{padding: "100px 20px", minHeight: "60vh"}}>
        <h1>Portofoliu Lucrări</h1>
        <p>Galerie foto cu lucrările noastre recente.</p>
        {/* TODO: Adaugă grid de imagini */}
      </div>
      <Footer />
    </>
  );
};

export default Portofoliu;