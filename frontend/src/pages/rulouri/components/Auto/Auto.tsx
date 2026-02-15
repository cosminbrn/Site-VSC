import React from 'react'
import './Auto.scss'
import rulouriImage from '../../../../assets/rulou1.png';

const Auto: React.FC = () => {
    return (
        <section className="auto">
            <div className="auto__inner">


                <div className="auto__text">
                    <h1>Rulouri automate</h1>
                    <p>
                    Rulouri moderne, automate și sigure, potrivite pentru feronerie și uși. Sistemele automate oferă confort și
                        protecție sporite, cu opțiuni pentru telecomandă și senzori.
                    </p>
                    <p>
                    Instalare profesională și calibrare pentru funcționare silențioasă și durabilă.
                    </p>
                </div>

                <div className="auto__image">
                    <img src={rulouriImage} alt="Rulouri automate instalate pe o locuință" />
                </div>

            </div>
        </section>
    )
}

export default Auto