import React from 'react';
import './Sills.scss';

const WindowSills: React.FC = () => {
  return (
    <section className="window-sills">
      <div className="inner">
        <div className="text-content">
          <h2>Glafuri Interior & Exterior</h2>
          <p>
            Completează estetic ferestrele și protejează zidăria împotriva infiltrațiilor.
            Oferim soluții durabile, rezistente la raze UV și intemperii.
          </p>
        </div>

        <div className="sills-grid">
          <div className="sill-card">
            <div className="card-header">
              <h3>Exterior</h3>
              <span className="material-tag">Aluminiu</span>
            </div>
            <p>
              Glafuri din aluminiu vopsit în câmp electrostatic. Rezistență maximă la apă și temperaturi extreme.
              Disponibile în alb, maro, antracit și imitații de lemn.
            </p>
          </div>

          <div className="sill-card">
            <div className="card-header">
              <h3>Interior</h3>
              <span className="material-tag">PVC</span>
            </div>
            <p>
              Glafuri din PVC cu structură celulară, rezistente la zgârieturi și umezeală. 
              Ușor de curățat, disponibile într-o gamă largă de culori pentru a se asorta cu fereastra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowSills;