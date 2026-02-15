import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

const Ferestre = () => {
  return (
    <>
      <Navbar />
      <div className="page-content" style={{padding: "100px 20px", minHeight: "60vh"}}>
        <h1>Ferestre și Uși PVC</h1>
        <p>Aici vom prezenta profilurile Salamander și feroneria Roto.</p>
        {/* TODO: Adaugă detalii tehnice despre profile */}
      </div>
      <Footer />
    </>
  );
};

export default Ferestre;