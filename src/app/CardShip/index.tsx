/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { StarShip } from '../../api/types';
import { capitalizeFirstLetter } from '../../utils/string';
import styles from './cardShip.module.css';

function CardShip({ name, crew, passengers, hyperdrive_rating }: StarShip): JSX.Element {
    return (
        <section className={styles.container}>
            <h4>{capitalizeFirstLetter(name)}</h4>
            <div className={styles.content}>
                <div className={styles.stats}>
                    <span>Crew: {parseInt(crew) ? crew : 'None'}</span>
                    <p>Passengers: {parseInt(passengers) ? passengers : 'None'}</p>
                </div>
                <div className={styles.rate}>
                    <span>Hyperdrive Class</span>
                    <p>{hyperdrive_rating}</p>
                </div>
            </div>
        </section>
    );
}

export default CardShip;
