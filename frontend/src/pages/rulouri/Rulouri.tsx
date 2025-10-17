import { useState } from 'react';
import './Rulouri.scss';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Auto from './components/Auto/Auto';
import Manual from './components/Manual/Manual';
import Materials from './components/Materials/Materials';
import Install from './components/Install/Install';
function Rulouri() {

  return (
    <div className="Rulouri">
        <Navbar />
        <Auto />
        <Manual />
        <Materials />
        <Install />
        <Footer />
    </div>
  );
}

export default Rulouri;
