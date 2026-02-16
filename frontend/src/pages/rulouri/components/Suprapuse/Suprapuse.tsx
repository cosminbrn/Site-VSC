import React from 'react';
import './Suprapuse.scss';
import rulouriImage from '../../../../assets/rulou-aplicat-001.jpeg';

const Suprapuse: React.FC = () => {
  return (
    <section className="suprapuse">
      <div className="suprapuse__container">

        <div className="suprapuse__image">
          <img src={rulouriImage} alt="Rulouri automate instalate pe o locuință" />
        </div>

        <div className="suprapuse__content">
          <h1>Rulouri Suprapuse</h1>
          <p>
            Concepute pentru a forma un tot unitar cu fereastra, rulourile suprapuse 
            se montează exclusiv împreună cu tâmplăria nouă, în golul de zidărie. 
            Este sistemul preferat pentru construcțiile noi sau renovările care 
            implică înlocuirea ferestrelor, oferind cea mai bună izolare termică.
          </p>
          
          <ul className="suprapuse__list">
            <li>Manuale</li>
            <li>Cu telecomandă</li>
          </ul>
        </div>


      </div>
    </section>
  );
}

export default Suprapuse;