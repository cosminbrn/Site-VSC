import React from 'react'
import './Aplicate.scss'
import rulouriImage from '../../../../assets/rulou-aplicat-001.jpeg';

const Aplicate: React.FC = () => {
    return (
        <section className="aplicate">
            <div className="aplicate__inner">


                <div className="aplicate__text">
                    <h1>Rulouri Aplicate</h1>
                    <p>
                    Proiectate special pentru clădirile unde ferestrele sunt deja montate, rulourile aplicate se instalează pe exteriorul tâmplăriei sau direct pe fațadă. Sunt alegerea perfectă pentru renovări, oferind o barieră termică și fonică excelentă, fără a necesita modificări structurale sau înlocuirea ferestrelor.
                    </p>
                    <ul className="aplicate__list">
                        <li>Manuale</li>
                        <li>Cu telecomandă</li>
                    </ul>
                </div>

                <div className="aplicate__image">
                    <img src={rulouriImage} alt="Rulouri automate instalate pe o locuință" />
                </div>

                

                

            </div>
        </section>
    )
}

export default Aplicate